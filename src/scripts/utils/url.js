


function getQuerys(props){
    const raw_querys = props.location.search;   //?a=x&b=y&c=z...
    if(!raw_querys)return {}
    var querys = raw_querys.substring(1,raw_querys.length);
    querys = querys.replace('&',',"');
    querys = querys.replace('=','":');
    querys = '{"'+querys+'}';
    return JSON.parse(querys);
}

export{
    getQuerys
}