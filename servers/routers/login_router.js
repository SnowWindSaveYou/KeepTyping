const express = require("express");
const router = express.Router();
const session = require("express-session");
const secureConnection = require("../scripts/utils/secure_connection");
const Token = require("../scripts/utils/token");
const UserModel = require("../models/user");

const UserController = require("../scripts/controllers/user_controller");

router.use(
  session({
    secret: "secret 0v0 2333",
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 100 * 60 * 3 // 3m
    }
  })
);

router.get("/", (req, res) => {
  res.send("login");
});
/**
 * Check if user exist, login has not expired and get user information if user exist.
 */
router.get("/checkLogin", (req, res) => {
  var tokenMsg = Token.checkToken(req.headers["token"]);
  if (tokenMsg) {
    UserController.getUserDetail(tokenMsg.data.user_id, (err, data) => {
      if (err || !data) {
        res.json({
          success: false,
          message: "login failed"
        });
      } else {
        res.json({
          success: true,
          message: "login success",
          data: data
        });
      }
    });
  } else {
    res.json(tokenMsg);
  }
});

/**
 * Create public Key for client and save private key to session
 */
router.get("/createKey", (req, res) => {
  keys = secureConnection.createKey();
  req.session.my_private = keys[0]; // save my private key to session
  req.session.my_prime = keys[2]; // save my private key to session
  req.session.iv = keys[3]; // save my iv to session
  res.json({
    server_key: keys[1], // my public key
    prime: keys[2],
    iv: keys[3]
  });
});

/**
 * Confirm Login
 */
router.post("/comformLogin", (req, res) => {
  let msg = req.body;
  // Check session
  if (req.session.my_private) {
    var my_private = new Buffer.from(req.session.my_private);
    var my_prime = new Buffer.from(req.session.my_prime);
    var client_keys = new Buffer.from(msg.client_keys.data);
    var my_iv = req.session.iv;
    var secret = secureConnection.computeSecret(
      client_keys,
      my_private,
      my_prime,
      my_iv
    );
    // decode secret message
    var secret_msg = secureConnection.decryptData(msg.cipher_msg, secret);
    var secret_msg = JSON.parse(secret_msg);
    var res_user_id = secret_msg.user_id.toLowerCase();
    var res_user_password = secret_msg.user_password;

    // find user account in db by id
    var user_password = null;
    var user_salt = null;
    UserModel.findOne({ id: res_user_id }).exec((err, user) => {
      if (err) {
        console.log(err);
        return;
      } else if (!user) {
        res.json({
          success: false,
          message: "user not exist"
        });
      } else {
        user_password = user.password;
        user_salt = user.salt;
        // hash the req password to check it
        var hashed_password = secureConnection.makeHash(res_user_password);
        hashed_password = secureConnection.makeHash(
          hashed_password + user_salt
        );
        if (hashed_password === user_password) {
          // if ture, return the signatited token by secret
          my_token = Token.createToken(
            {
              user_id: user._id,
              user_name: user.name
            },
            100 * 60 * 60 * 24 * 7
          );

          res.json({
            success: true,
            message: "login sucessful",
            data: secureConnection.encryptData(my_token, secret, my_iv)
          });
        } else {
          res.json({
            success: false,
            message: "uncorrect password"
          });
        }
      }
    });
  } else {
    res.json({
      success: false,
      message: "login session time out"
    });
  }
});

module.exports = router;
