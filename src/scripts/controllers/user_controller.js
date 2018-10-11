import axios from 'axios';
import LoginController from './login_controller';
var UserController = {
    checkToken(){
        return localStorage.getItem('token')
    },
    getUser(userId,callback){
        axios.get('/api/m/user/getUser/'+userId)
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
        axios.get('/api/m/user/getUserPosts/'+userId)
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
        axios.get('/api/m/user/getMyPosts',{
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