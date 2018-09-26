import SecureTransfer from '../utils/secure_transfer';
import axios from 'axios';
import {notificationShow} from '@/scripts/controllers/dialog_controller'
import CheckFormat from '../utils/check_format';

const CREATE_KEY_URL = '/api/m/registe/createKey';
const RIGESTE_URL = '/api/m/registe/registeUser';


var RegisteController = {
    userRegiste(account,user_name,password){

        if(!account||!password||!user_name){
            notificationShow("Please fill all space","warn")
            return;
        }
        if(!CheckFormat.checkEmail(account)){
            notificationShow("This is not a Currect Email","warn")
            return;
        }

        /** registe the session and get AES encrypt key */
        axios.get(CREATE_KEY_URL)
        .then(function (res) {
            /* get datas from response msg */
            var prime = new Buffer.from(res.data.prime.data);
            var their_public = new Buffer.from(res.data.server_key.data);
            var iv = res.data.iv;

            var DH_keys = SecureTransfer.createDHKey(prime,their_public); // generate secret key
            var hash_password = SecureTransfer.makeHash(password); // first hash password in client part

            /* make msg need transfer, and encrypt raw message by aes cbc */
            var row_msg = {
                user_id:account,
                user_name:user_name,
                user_password:hash_password
            }
            var cipherMsg = SecureTransfer.encryptMsg(JSON.stringify(row_msg) ,DH_keys.my_secret,DH_keys.my_public);

            
            /* comform Registe */
            axios.post(RIGESTE_URL, {
                cipher_msg: cipherMsg,
                client_keys:DH_keys.my_public
            }, {
                headers: {'Content-Type': 'application/json'} 
            })
            .then(function (res) {
                    if(res.data.success){
                        // if registe success, decode responde msg to get token
                        var decipherMsg = SecureTransfer.decodeMsg(res.data.data,DH_keys.my_secret,iv);
                        localStorage.setItem('token',decipherMsg,{path:'/'})  
                        global.setLogin(true)               
                    }else{
                        console.log(res.data.message);
                    }
                    
                }).catch(function (err) {
                    console.log(err);
                })

        }).catch(function (err) {
            console.log(err);
        })
    }
}

export default RegisteController;