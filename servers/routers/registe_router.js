const express = require('express');
const router = express.Router();
const session = require('express-session');
const secureConnection = require('../scripts/secure_connection');

const token = require('../scripts/token');
const UserModel = require('../models/user');

router.use(session({
    secret :  'secret 0v0 2333', 
    resave : true,
    saveUninitialized: false, 
    cookie : {
        maxAge : 100*60*10, // 10m
    },
}));

router.get('/', (req, res) => {
    res.send("registe");
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
        success:true,
        server_key:keys[1],      // my public key
        prime:keys[2],
        iv:keys[3] 
    });
});


/**
 * 
 * cipher_msg{user_id,user_name,user_password}
 */
router.post('/registeUser',(req,res) =>{
    let msg = req.body
    // check session
    if(req.session.my_private){
        var my_private = new Buffer.from(req.session.my_private);
        var my_prime = new Buffer.from(req.session.my_prime);
        var client_keys = new Buffer.from(msg.client_keys.data);
        var iv = req.session.iv;
        var secret = secureConnection.computeSecret(client_keys ,my_private, my_prime);
        // decode the secret message
        var secret_msg = secureConnection.decryptData(msg.cipher_msg, secret,iv);
        var secret_msg = JSON.parse(secret_msg)
        var res_user_id = secret_msg.user_id.toLowerCase();
        var res_user_name = secret_msg.user_name;
        var res_user_password = secret_msg.user_password;

        // create salt
        var new_salt = secureConnection.getRandom()
        // hash the req password 
        var hashed_pasword = secureConnection.makeHash(res_user_password);
        hashed_pasword = secureConnection.makeHash(hashed_pasword + new_salt);

        UserModel.create({id:res_user_id,name:res_user_name,password:hashed_pasword,salt:new_salt},(err,docs)=>{
            if(err){
                console.log(err);
            }else{
                my_token = token.createToken({
                    user_id:docs._id,
                    user_name:docs.name,        
                },100*60*60*24*7);

                res.json({
                        success:true,
                        message:"registe sucessful",
                        data: secureConnection.encryptData(my_token,secret,iv)
                    });
            }
        })
        
    }else{
        res.json({
            success:false,
            message:"registe session time out"
        });
    }
});




module.exports = router