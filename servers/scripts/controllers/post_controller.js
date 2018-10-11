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
     * delete self reply, but is update state to 'delete'
     * @param {*} postId
     * @param {*} replyId 
     * @param {*} authorId
     */
    deleteReply(postId,replyId,authorId){
        PostModel
        findById(postId)
        .then((post)=>{
            post.post_replys.findById(replyId,(err,reply)=>{
                reply.reply_content = 'delete'
                reply.save()
            })
            post_state = 'delete'
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
        .findById(postId,{
            'post_topic':1,
            'post_author':1,
            'post_title':1,
            'post_content':1,
            'post_clicked':1,
            'post_reply_count':1,
            'post_follower_num':1,
            'updatedAt':1
        })
        .populate({path:'post_author',select:{
            name:1,avater:1,bias:1,following_num:1,follower_num:1
        }})
        .exec((err,data)=>{
            if(!data){
                callback("post not exist",data);
            }else{
                callback(err,data);
                data.post_clicked +=1;
                data.save();
            }
        })
    },
    /**
     * get post replys
     * @param {*} postId 
     * @param {*} page 
     * @param {*} callback 
     */
    getReplys(postId,page, callback){
        console.log(page)
        var skipCount = page * PAGE_ROW_LIMIT;
        PostModel
        .findOne({_id:postId},{'post_replys':{$slice: [skipCount,PAGE_ROW_LIMIT]}})
        .populate(
            {path:'post_replys.reply_author',select:{
                name:1,avater:1
            }}
        )
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