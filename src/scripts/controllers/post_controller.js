import axios from 'axios';

var PostController = {
    
    getPosts(topic,callback){
        var posts = []
        axios.get('/api/m/topic/posts/'+topic)
        .then(function(res){
            posts = res.data
            typeof callback === 'function' && callback.call(window,posts);
            return posts;
        }).catch(function(err){
            console.log(err);
        })
    },
    postPost(token,topic,post_title,post_content){
        axios.post('/api/m/topic/post/'+ topic,{
            post_title:post_title,
            post_content:post_content
        },{
            headers: {
            'Token': token, 
            'Content-Type': 'application/json'} 
        }).then(function(res){
            //TODO: notice success
    
        }).catch(function(err){
            console.log(err)
        })
    }

}

export default PostController;