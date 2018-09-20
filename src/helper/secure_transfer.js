import crypto from 'crypto';
var SecureTransfer ={
    getRand(){
        crypto.randomBytes(16,function(ex,buf){
            return buf.toString('hex')
        })
        var randBuf = crypto.randomBytes(16)
        return randBuf.toString('hex')
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
        var decipher = crypto.createDecipher('aes-128-cbc',secret,iv);
        var decrypted = decipher.update(msg,'hex','utf8');
        return decrypted += decipher.final('utf8')
    },
    createMhac(msg,secret,iv){

    },
    test(){
        return 'test'
    }

}



export default SecureTransfer;