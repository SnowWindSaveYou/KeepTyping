const UserModel = require('../models/user')
const TopicModel = require('../models/topic')
const PostModel = require('../models/post')



var PostController ={
    // stucte a reply
    reply_count(author,content){
        return{
            reply_content:content,
            author:author,
            date:Date.toString()
        }
    },

    // create a post under topic & update author's notification
    createPost(topic,author,title,content){
        // create post and registe under topic
        new_post = new PostModel({post_topic:topic,
                                    post_author:author,
                                    post_title:title,
                                    post_content:content});
        new_post.save();
        //TODO: also register the post in author's detail

        //TODO: give notification to who follow the author
        
        return true;
    },

    // create a reply under post & update author's notification
    createReply(author,post,content){
        //TODO: push data in post doc

        //TODO: give notification to uper layer's author(post author)
        
        return true;
    },

    // create a sub reply under reply & update author's notification
    createSubReply(author,topic,replyLever,content){
        //TODO: push data in post doc

        //TODO: give notification to uper layer's author (post,reply author)

        return true;
    }
}

module.exports = PostController;