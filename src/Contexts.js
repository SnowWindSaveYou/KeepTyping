/**
 * share the state on top layer
 */
import React from 'react';
const LoginContext = React.createContext({
    login: false,
    my_info:null,
});  

export{
  LoginContext
}