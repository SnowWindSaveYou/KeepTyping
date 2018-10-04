import React from 'react';
const LoginContext = React.createContext({
    login: false,
    my_name:null,
    my_topic:[],
    my_following:[],
});  
export{
  LoginContext
}