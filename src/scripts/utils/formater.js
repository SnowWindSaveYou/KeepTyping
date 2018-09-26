
import React from 'react';
function formateDate(dateStr){
    var today = new Date();
    var date = new Date(dateStr);
    if(date.toLocaleDateString() == today.toLocaleDateString()){
        return date.toLocaleTimeString();
    }else{
        return date.toLocaleDateString();
    }
}

/**
 * process plan doc to react element
 * @param {*} doc 
 */
function formateDoc(doc){
    var doc_list = doc.split('\n');
    var doc_elements = []

    doc_list.forEach((paragraph,i)=>{
        doc_elements.push(<p key={i}>{paragraph}</p>)
    })
    return doc_elements
}


export{
    formateDate,formateDoc
}