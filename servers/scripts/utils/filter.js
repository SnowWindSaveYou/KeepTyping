const SymbolRegFunc = "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]";


const nameFilter = (data) =>{
    reg = /^([a-zA-Z0-9_-])+/;
    if (!reg.test(data.value)){ 
        return false;
    }
    return true;
}

const LengthFilter = (data) =>{
    
    return false
}