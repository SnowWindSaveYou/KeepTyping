import crypto from 'crypto';
var SecureTransfer ={
    getRand(){
        
    },
    getToken(){
        return{
            token:localStorage.getItem('token'),
            ic:localStorage.getItem('ic')
        }
    },
    encryptMsg(msg,secret,iv){
        var cipher = crypto.createCipher('aes-128-cbc', secret,iv);
        var cipherResult = cipher.update(msg, 'utf8', 'hex');
        return cipherResult += cipher.final('hex');
    },
    decodeMsg(msg,secret,iv){
        var decipher = crypto.createCipher('aes-128-cbc', secret,iv);
        var decipherResult = decipher.update(msg, 'utf8', 'hex');
        return decipherResult += decipher.final('hex');
    },
    createMhac(msg,secret,iv){

    },
    test(){
        return 'test'
    }

}



export default SecureTransfer;