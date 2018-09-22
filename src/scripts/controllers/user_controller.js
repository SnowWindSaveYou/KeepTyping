import axios from 'axios';

const CREATE_KEY_URL = '/api/m/login/createKey';
const LOGIN_URL = '/api/m/login/comformLogin';

var UserController = {
    checkToken(){
        return localStorage.getItem('token')
    },

}

export default UserController;