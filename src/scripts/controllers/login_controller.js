import SecureTransfer from '../utils/secure_transfer';
import CheckFormat from '../utils/check_format';
import axios from 'axios';
import {notificationShow} from '@/scripts/controllers/dialog_controller'

const CREATE_KEY_URL = '/api/m/login/createKey';
const LOGIN_URL = '/api/m/login/comformLogin';


var LoginController = {
    userLogin(account,password,callback){
        if(!account||!password){
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
                user_password:hash_password
            }
            var cipherMsg = SecureTransfer.encryptMsg(JSON.stringify(row_msg) ,DH_keys.my_secret,DH_keys.my_public);

            /* comform Login */
            axios.post(LOGIN_URL, {
                cipher_msg: cipherMsg,
                client_keys: DH_keys.my_public
            }, {
                headers: {'Content-Type': 'application/json'} 
            })
            .then(function (res) {
                    if(res.data.success){
                        // if login success, decode responde msg to get token
                        var decipherMsg = SecureTransfer.decodeMsg(res.data.data,DH_keys.my_secret,iv)
                        localStorage.setItem('token',decipherMsg,{path:'/'})  
                        global.getMyInfo()
                        global.setLogin(true)   
                        callback() 
                        notificationShow("Login success",true)            
                    }else{
                        notificationShow(res.data.message,false)
                    }
                    
                }).catch(function (err) {
                    console.log(err);
                })

        }).catch(function (err) {
            console.log(err);
        })
    },
    
    checkLoginState(callback){
        let that = this
        if(localStorage.getItem('token')){
            axios.get('/api/m/login/checkLogin',
            {
                headers: {
                'Token': localStorage.getItem('token'), 
                'Content-Type': 'application/json'} 
            }).then(function(res){
                console.log(res.data)
                if(res.data.success){
                    callback(res.data.data)
                }else{
                    that.checkLogoutMsg(res.data.message);
                }
            }).catch(function(err){
                console.log(err)
            })
        }else{
            this.userLogout()
        }
    },
    userLogout(){
        localStorage.clear();
        sessionStorage.clear();
        global.setLogin(false);
    },
    checkLogoutMsg(msg){
        console.log('let user logout')
        if(["login state overdue","token not found","login failed"].includes(msg)){
            this.userLogout();
        }
    }
}

export default LoginController;