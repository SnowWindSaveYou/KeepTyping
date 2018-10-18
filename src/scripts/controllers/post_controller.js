/**
 * constrol the post action
 * use _id of post
 */
import axios from 'axios';
import {notificationShow} from '@/scripts/controllers/dialog_controller'
import LoginController from './login_controller'

const GET_POST_API = '/api/m/post/getPost/'
const GET_REPLYS_API = '/api/m/post/getReplys/'
const POST_REPLY_API = '/api/m/post/postReply/'

var PostController = {
    getPost(postId,callback){
        axios.get(GET_POST_API+postId)
        .then(function(res){
            let data = res.data.data
            typeof callback === 'function' && callback.call(window,data);
            return data;
        }).catch(function(err){
            console.log(err);
        })
    },
    getReplys(postId,page=0,callback){
        axios.get(GET_REPLYS_API +postId + "?page="+page)
        .then(function(res){
            let data = res.data.data
            typeof callback === 'function' && callback.call(window,data);
            return data;
        }).catch(function(err){
            console.log(err);
        })
    },

    postReply(postId,post_content){
        axios.post(POST_REPLY_API+ postId,{
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