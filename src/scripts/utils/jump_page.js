
import React from 'react';


function backLastPage(){
    if(document.location.href != document.referrer ){
        document.location.href = document.referrer 
    }{
        document.location.href = "/"
    }
}
function toHome(){
    document.location.href = "/"
    // that.props.history.push("/")
}
export{
    backLastPage,
    toHome
}