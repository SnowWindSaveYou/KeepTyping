const express = require('express');
const router = express.Router();
const session = require('express-session');
const secureConnection = require('../scripts/utils/secure_connection');
const token = require('../scripts/utils/token');
const RegisteController = require('../scripts/controllers/registe_controller');

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
 */
router.post('/registeUser',(req,res) =>{
    let msg = req.body
    // check session
    if(req.session.my_private){
        // define nessasary msg & 
        var my_private = new Buffer.from(req.session.my_private);
        var client_keys = new Buffer.from(msg.client_keys.data);
        var prime = new Buffer.from(req.session.my_prime);
        var iv = req.session.iv;
        var secret = secureConnection.computeSecret(client_keys ,my_private, prime);
        // decode the secret message
        var secret_msg = secureConnection.decryptData(msg.cipher_msg, secret,iv);
        var secret_msg = JSON.parse(secret_msg);
        // got user input
        var user_id = secret_msg.user_id.toLowerCase();
        var user_name = secret_msg.user_name;
        var user_password = secret_msg.user_password;

        // registe the user
        RegisteController.registeUser(user_id,user_name,user_password,
            (result)=>{
                if(result.success){
                    // create token for user login
                    my_token = token.createToken({
                        user_id:result.data._id,
                        user_name:result.data.name,        
                    },100*60*60*24*7);
                    res.json({
                        success:true,
                        message:"registe sucessful",
                        data:secureConnection.encryptData(my_token, secret,iv)
                    });

                }else{
                    res.json({
                        success:false,
                        message:result.message
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