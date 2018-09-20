const crypto = require('crypto');
const SECRET_KEY = "let it secret (゜-゜)つロ Cheers~ (ﾟ▽ﾟ)/ HELLO## (oﾟ▽ﾟ)o d(･｀ω´･d*)";

var Token = {
    createToken(obj,timeout){
        console.log("timeout: "+ parseInt(timeout)||0);
        var new_obj={
            iss:"keeptyping.com",
            sub:"my atm",
            aud:"keeptyping.com",
            msg:obj,
            iat: parseInt(Date.now()/1000),
            exp:parseInt(timeout)||10
        }
        //payload message
        var base64Str=Buffer.from(JSON.stringify(new_obj),"utf8").toString("base64");

        //signiture
        var hash=crypto.createHmac('sha256',SECRET_KEY);
            hash.update(base64Str);
        var signature=hash.digest('base64');
        return  base64Str+"."+signature;
    },

    decodeToken(token){
        var decodeArr = token.split(".");
        if (decodeArr.length<2)return false

        var payload = {}
        try{
            payload = JSON.parse(Buffer.from(decodeArr[0],"base64").toString("utf8"));
        }catch(e){
            return false;
        }
        // authenticate signiture
        var hash=crypto.createHmac('sha256',SECRET_KEY);
            hash.update(decodeArr[0]);
        var checkSignature = hash.digest('base64');

        return{
            payload:payload,
            signature:decodeArr[1],
            checkSignature:checkSignature
        }
    },
    checkToken(token){
        var decodeMsg = this.decodeToken(token);
        console.log("decodeMsg",decodeMsg)
        if(!decodeMsg)return false;
        // check the validity date
        var expState = (parseInt(Date.now()/1000) - parseInt(decodeMsg.payload.iat)) 
                                        > parseInt(decodeMsg.payload.exp) ? false:true;
        
        if(decodeMsg.signature === decodeMsg.checkSignature && expState){
            return decodeMsg.payload.msg;
        } 
        return false;
    }

}
module.exports = Token;