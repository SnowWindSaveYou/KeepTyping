import axios from 'axios';

const CREATE_KEY_URL = '/api/m/login/createKey';
const LOGIN_URL = '/api/m/login/comformLogin';

const GET_MY_INFO = '/api/m/user/getMyInfo';
const GET_USER_INFO = '/api/m/user/getUser';

var UserController = {
    checkToken(){
        return localStorage.getItem('token')
    },
    getMyInfo(callback){
        if(localStorage.getItem('token')){
            var my_name = sessionStorage.getItem('my_name');
            if(my_name){
                var my_follower_num = sessionStorage.getItem('my_follower_num');
                var my_following_num  = sessionStorage.getItem('my_following_num');
                var my_topic = sessionStorage.getItem('my_topic');
            }else{
                axios.get()
                .then(function(data){
                    
                    callback(data)
                }).catch(function(err){
                    console.log(err);
                })
            }
        }
    }
}

export default UserController;