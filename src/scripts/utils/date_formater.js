

function mongoToPost(dateStr){
    var today = new Date();
    var date = new Date(dateStr);
    if(date.toLocaleDateString() == today.toLocaleDateString()){
        return date.toLocaleTimeString();
    }else{
        return date.toLocaleDateString();
    }
}

export{
    mongoToPost
}