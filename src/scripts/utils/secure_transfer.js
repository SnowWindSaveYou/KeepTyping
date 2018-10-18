/**
 * use to secure the data trafic
 */

import crypto from 'crypto';
var SecureTransfer ={
    getRand(){
        crypto.randomBytes(16,function(ex,buf){
            return buf.toString('hex')
        })
        var randBuf = crypto.randomBytes(16)
        return randBuf.toString('hex')
    },
    makeHash(msg){
        const hash = crypto.createHash('sha256');
        hash.update(msg)
        return hash.digest('hex')
    },
    getToken(){
        return localStorage.getItem('token')
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
    computeSecret(their_public, my_private, prime){
        var DH = crypto.createDiffieHellman(prime);
        DH.setPrivateKey(my_private);
        return DH.computeSecret(their_public);
    },
    createDHKey(prime,their_public){
        var DH = crypto.createDiffieHellman(prime)
        DH.generateKeys()
        var my_public = DH.getPublicKey();
        var my_secret = DH.computeSecret(their_public);
        return {my_public:my_public, my_secret:my_secret}
    },
    test(){
        return 'test'
    }

}



export default SecureTransfer;