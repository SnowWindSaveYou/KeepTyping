const express = require('express');
const router = express.Router();
const session = require('express-session');
const secureConnection = require('./scripts/secure_connection');


const UserModel = require('./models/user');

router.use(session({
    secret :  'secret 0v0 2333', 
    resave : true,
    saveUninitialized: false, 
    cookie : {
        maxAge : 100*60*3, // 3m
    },
}));

router.get('/', (req, res) => {
    res.send("login");
});

/** 
 * Create public Key for client and save private key to session
 */
router.get('/createKey',(req,res) =>{
    keys = secureConnection.createKey()
    req.session.my_private = keys[0] // save my private key to session
    req.session.my_prime = keys[2] // save my private key to session
    req.session.iv = keys[3] // save my iv to session
    res.json({
        server_key:keys[1],      // my public key
        prime:keys[2],
        iv:keys[3]
    });
});

/**
 * 
 */
router.post('/comformLogin',(req,res) =>{
    let msg = req.body
    // check session
    if(req.session.my_private){
        var my_private = new Buffer.from(req.session.my_private);
        var my_prime = new Buffer.from(req.session.my_prime);
        var client_keys = new Buffer.from(msg.client_keys.data);
        var secret = secureConnection.computeSecret(client_keys ,my_private, my_prime,req.session.iv);
        // decode secret message
        var secret_msg = secureConnection.decryptData(msg.cipher_msg, secret);
        console.log("secret_msg: ",secret_msg);
        var secret_msg = JSON.parse(secret_msg)
        var res_user_id = secret_msg.user_id;
        var res_user_password = secret_msg.user_password;

        // find user account in db by id
        var user_password = null
        var user_salt = null
        UserModel.find({id:res_user_id}).exec((err,user)=>{
            if(err){
                console.log(err);
                return;
            }else if(user.length===0){
                res.json("user not exist");
            }else{
                console.log("user: ",user)
                user_password = user[0].password;
                user_salt = user[0].salt;
                // hash the req password to check it 
                var hashed_pasword = secureConnection.makeHash(res_user_password);
                hashed_pasword = secureConnection.makeHash(hashed_pasword + user_salt);
                if(hashed_pasword === user_password){
                    res.json("login sucessful");
                }else{
                    console.log(user_password)
                    res.json("password err");
                }
            }
        })
        
    }else{
        res.json("login session time out");
    }
});

module.exports = router