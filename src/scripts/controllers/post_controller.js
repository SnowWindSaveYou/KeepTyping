import axios from 'axios';

var PostController = {
    getPost(postId,callback){
        axios.get('/api/m/post/getPost/'+postId)
        .then(function(res){
            let data = res.data.data
            typeof callback === 'function' && callback.call(window,data);
            return {
                post:{
                    post_title:data.post_title,
                    post_content:data.post_content,
                    post_author:data.post_author
                },
                replys:data.post_replys
            };
        }).catch(function(err){
            console.log(err);
        })
    },
    getPostReplys(postId,page=1,callback){
        axios.get('/api/m/post/getReplys/'+postId + "?page="+page)
        .then(function(res){
            let data = res.data.data
            typeof callback === 'function' && callback.call(window,data);
            return {
                replys:data.post_replys
            };
        }).catch(function(err){
            console.log(err);
        })
    },

    postPost(token,topic,post_title,post_content){
        axios.post('/api/m/post/postReply/'+ topic,{
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