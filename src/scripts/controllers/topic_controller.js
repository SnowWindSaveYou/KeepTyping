import axios from 'axios';
import {notificationShow} from './dialog_controller'
import LoginController from './login_controller'

var TopicController = {
    
    getPosts(topic,callback){
        var posts = []
        axios.get('/api/m/topic/getPosts/'+topic)
        .then(function(res){
            posts = res.data
            typeof callback === 'function' && callback.call(window,posts);
            return posts;
        }).catch(function(err){
            console.log(err);
        })
    },
    postPost(topic,post_title,post_content){
        axios.post('/api/m/topic/postPost/'+ topic,{
            post_title:post_title,
            post_content:post_content
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

export default TopicController;