const UserModel = require('../models/user')
const TopicModel = require('../models/topic')
const PostModel = require('../models/post')

const PAGE_ROW_LIMIT = 10

var PostController ={

    /**
     * create a reply under post & update author's notification
     * @param {*} post 
     * @param {*} author 
     * @param {*} content 
     */
    createReply(post,author,content){
        // push data in post doc
        PostModel.findById(post)
        .then((post)=>{
            post.post_replys.push({reply_author:author,reply_content:content});
            post.save()
            return true;
        })
        .catch((err)=>{
            return false;
        })
        //TODO: give notification to uper layer's author(post author)
        
        return true;
    },

    /**
     * get the post and add the clicked count
     * @param {*} postId 
     * @param {*} callback 
     */
    getPost(postId, callback){
        PostModel
        .findOne({_id:postId},['post_author','post_title','post_content','post_clicked','updatedAt','post_replys'])
        .limit(PAGE_ROW_LIMIT)
        .exec((err,data)=>{
            callback(err,data);
        })
    },
    /**
     * get post replys
     * @param {*} postId 
     * @param {*} page 
     * @param {*} callback 
     */
    getReplys(postId,page=0, callback){
        var skipCount = page * PAGE_ROW_LIMIT;
        PostModel
        .findOne({_id:postId},['post_replys'])
        .limit(PAGE_ROW_LIMIT)
        .skip(skipCount)
        .exec((err,data)=>{
            callback(err,data);
        })
    },

    // create a sub reply under reply & update author's notification
    createSubReply(post,replyLever,author,content){
        //TODO: push data in post doc
        PostModel.findById(post)
        .then((post)=>{
            post.post_replys[replyLever].push({sub_author:author,sub_content:content});
            post.save()
        })
        .catch((err)=>{
            return false;
        })

        //TODO: give notification to uper layer's author (post,reply author)

        return true;
    }
}

module.exports = PostController;