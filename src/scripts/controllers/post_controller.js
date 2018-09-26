import axios from 'axios';
import {notificationShow} from '@/scripts/controllers/dialog_controller'
import LoginController from './login_controller'

var PostController = {
    getPost(postId,callback){
        axios.get('/api/m/post/getPost/'+postId)
        .then(function(res){
            let data = res.data.data
            typeof callback === 'function' && callback.call(window,data);
            return data;
        }).catch(function(err){
            console.log(err);
        })
    },
    getReplys(postId,page=0,callback){
        axios.get('/api/m/post/getReplys/'+postId + "?page="+page)
        .then(function(res){
            let data = res.data.data
            typeof callback === 'function' && callback.call(window,data);
            return data;
        }).catch(function(err){
            console.log(err);
        })
    },

    postReply(postId,post_content){
        axios.post('/api/m/post/postReply/'+ postId,{
            reply_content:post_content
        },{
            headers: {
            'Token': localStorage.getItem('token'), 
            'Content-Type': 'application/json'} 
        }).then(function(res){
            LoginController.checkLogoutMsg(res.data.message);
            notificationShow(res.data.message,res.data.success)
        }).catch(function(err){
            console.log(err)
        })
    }

}

export default PostController;