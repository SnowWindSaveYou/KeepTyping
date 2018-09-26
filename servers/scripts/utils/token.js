const crypto = require('crypto');
const SECRET_KEY = "let it secret (゜-゜)つロ Cheers~ (ﾟ▽ﾟ)/ HELLO## (oﾟ▽ﾟ)o d(･｀ω´･d*)";

var Token = {
    createToken(obj,timeout){
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
        if(!token || token ==="undefined"){
            return {
                success:false,
                message:"token not found"
            };
        }
        var decodeMsg = this.decodeToken(token);
        if(!decodeMsg){
            return {
                success:false,
                message:"token decode fail"
            };
        }
        if((parseInt(Date.now()/1000) - parseInt(decodeMsg.payload.iat)) > parseInt(decodeMsg.payload.exp)){
            return {
                success:false,
                message:"login state overdue"
            };
        }
        if(decodeMsg.signature === decodeMsg.checkSignature){
            return {
                success:true,
                message:"login success",
                data:decodeMsg.payload.msg
            }
        }else{
            return {
                success:false,
                message:"token decode fail"
            };
        } 
    }

}
module.exports = Token;