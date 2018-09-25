
const CheckFormat={
    checkEmail(email){
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        return reg.test(email);
    },
    checkName(text){
        var reg = /^([a-zA-Z0-9_-])+/;
        return reg.test(text);
    },
    checkLength(text,len){
        return text.length < len
    }
}

export default CheckFormat;