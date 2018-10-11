import axios from 'axios';
import {notificationShow} from './dialog_controller'
import LoginController from './login_controller'

var TopicController = {
    createTopic(topic,callback){
        if(!localStorage.getItem('token')){
            notificationShow("Please Login first","warn")
        }
        axios.post('/api/m/topic/createTopic/'+topic,{
        },{
            headers:{'Content-Type': 'application/json',
            'token':localStorage.getItem('token')}
        })
        .then((data)=>{
            if(data.data.success){
                notificationShow("Topic is Created",true,()=>{
                    document.location.href = "/t/"+topic
                })
            }
        })
    },
    getTopic(topic,callback){
        axios.get('/api/m/topic/getTopic/'+topic)
        .then(function(res){
            if(res.data.success){
                console.log(res.data.data)
                callback(res.data.data)
            }else{

            }
        }).catch(function(err){
            console.log(err);
        })
    },
    getPosts(topic,page=0,callback){
        var posts = []
        axios.get('/api/m/topic/getPosts/'+topic+'?page='+page)
        .then(function(res){
            if(res.data.success){
                posts = res.data.data
                typeof callback === 'function' && callback.call(window,posts);
                return posts;
            } 
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
    },
    followTopic(topic){
        axios.get('/api/m/topic/followTopic/'+ topic,{
            headers: {
            'Token': localStorage.getItem('token'), 
            'Content-Type': 'application/json'} 
        }).then(function(res){
            if(!res.data.success){LoginController.checkLogoutMsg(res.data.message);}
            else{global.followTopic(topic,true)}
        }).catch(function(err){
            console.log(err)
        })
    },
    unfollowTopic(topic){
        axios.get('/api/m/topic/unfollowTopic/'+ topic,{
            headers: {
            'Token': localStorage.getItem('token'), 
            'Content-Type': 'application/json'} 
        }).then(function(res){
            if(!res.data.success){LoginController.checkLogoutMsg(res.data.message);}
            else{global.followTopic(topic,false)}
            
        }).catch(function(err){
            console.log(err)
        })
    }
}

export default TopicController;