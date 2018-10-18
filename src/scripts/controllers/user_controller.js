/**
 * use to control user data
 * use _id of user 
 * 
 */

import axios from 'axios';
import LoginController from './login_controller';

const GET_USER_API = '/api/m/user/getUser/'
const GET_USER_POSTS_API = '/api/m/user/getUserPosts/'
const GET_MY_POSTS_API = '/api/m/user/getMyPosts'

var UserController = {
    checkToken(){
        return localStorage.getItem('token')
    },
    getUser(userId,callback){
        axios.get(GET_USER_API + userId)
        .then(function(res){
            console.log(res.data)
            if(res.data.success){
                callback(res.data.data)
            }
        }).catch(function(err){
            console.log(err);
        })
    },
    getUserPosts(userId,callback){
        axios.get(GET_USER_POSTS_API + userId)
        .then(function(res){
            console.log(res.data)
            if(res.data.success){
                callback(res.data.data)
            }
        }).catch(function(err){
            console.log(err);
        })
    },
    getMyPosts(callback){
        axios.get(GET_MY_POSTS_API,{
            headers: {
            'Token': localStorage.getItem('token'), 
            'Content-Type': 'application/json'} 
        }).then(function(res){
            if(!res.data.success){LoginController.checkLogoutMsg(res.data.message);}
            else{
                callback(res.data.data)
            }
        }).catch(function(err){
            console.log(err)
        })
    },
}

export default UserController;