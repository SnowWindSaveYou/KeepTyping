const UserModel = require('../../models/user')
const TopicModel = require('../../models/topic')
const PostModel = require('../../models/post')

const PAGE_ROW_LIMIT = 10

var PostController ={

    /**
     * create a reply under post & update author's notification
     * @param {*} post 
     * @param {*} author 
     * @param {*} content 
     */
    postReply(postId,authorId,content){
        // push data in post doc
        PostModel.findById(postId)
        .then((post)=>{
            post.post_reply_count = post.post_reply_count+1
            post.post_replys.push({
                reply_level:  post.post_reply_count,
                reply_author: authorId,
                reply_content: content});
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
        .findOne({_id:postId},['post_author','post_title','post_content','post_clicked','updatedAt'])
        .populate({path:'post_author',select:{
            name:1,avater:1
        }})
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
        .populate({path:'post_replys.reply_author',select:{
            name:1,avater:1
        }})
        .limit(PAGE_ROW_LIMIT)
        .skip(skipCount)
        .exec((err,data)=>{
            callback(err,data);
        })
    },

    // create a sub reply under reply & update author's notification
    postSubReply(postId,replyLever,authorId,content){
        //TODO: push data in post doc
        PostModel.findById(postId)
        .then((post)=>{
            post.post_replys[replyLever].push({sub_author:authorId,sub_content:content});
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