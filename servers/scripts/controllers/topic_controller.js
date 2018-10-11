const UserModel = require('../../models/user')
const TopicModel = require('../../models/topic')
const PostModel = require('../../models/post')


const PAGE_ROW_LIMIT = 10

var TopicController = {
    followTopic(topicName,userId,callback){
        UserModel.findByIdAndUpdate(userId,{$push:{topics:topicName}},(err,res)=>{
            if(!err){
                TopicModel.findOneAndUpdate({title:topicName},{$inc:{member_num:1}}).exec()
                callback()
            }else{
                callback(err)
            }
        })
    },
    unfollowTopic(topicName,userId,callback){
        UserModel.findByIdAndUpdate(userId,{$pull:{topics:topicName}},(err,res)=>{
            if(!err ){
                if(res.topics.indexOf(topicName)!=-1){
                    TopicModel.findOneAndUpdate({title:topicName},{$inc:{member_num:-1}}).exec()
                }
                callback()
            }else{
                callback(err)
            }
        })
    },
    /**
     * Create a New Topic, the creator will be it's manager
     * @param {*} topicName 
     * @param {*} user_id 
     */
    createTopic(topicName,userId,callback){
        var new_topic = new TopicModel({title:topicName,managers:[userId]})
        new_topic.save((err,data)=>{
            callback(err,data)
        })
    },
    /**
     * Get basic topic information
     * @param {*} topicName 
     * @param {*} callback 
     */
    getTopic(topicName,callback){
        TopicModel.findOne({title:topicName},
            ['title','description','managers','tags',
            'member_num','post_num','configs'])
        .populate({path:'managers',select:{
            name:1,avater:1
        }})
        .exec((err,topic)=>{
            callback(err,topic)
        })
    },

    /**
     * create a post under topic & update author's notification
     * @param {*} topic 
     * @param {*} author 
     * @param {*} title 
     * @param {*} content 
     */
    postPost(topic, authorID, title, content,callback) {
        // create post and registe under topic
        new_post = new PostModel({
            post_topic: topic,
            post_author: authorID,
            post_title: title,
            post_content: content
        });
        new_post.save((err,data)=>{
            if(!err){
                // update topic have new post
                TopicModel.findOneAndUpdate({title:topic},{$inc:{post_num:1}}).exec()
                // register the post in author's detail
                UserModel.findByIdAndUpdate(authorID,{$push:{'user_posts':data._id}}).exec()
            }
            callback(err,data)
        });
        //TODO: give notification to who follow the author

        return true;
    },
    /**
     * 
     * @param {*} topicName 
     * @param {*} page 
     * @param {*} callback(err,data)
     */
    getPosts(topicName, page = 0, callback) {
        TopicModel.findOne({title:topicName},['post_num'],(err,res)=>{
                if(err){
                    callback(err,null)
                }else if(!res){
                    callback('topic not exist',null)
                }else if(res.post_num < (page * PAGE_ROW_LIMIT)){
                    callback('page is overflow',null)
                }else{
                    var skipCount = page * PAGE_ROW_LIMIT;
                    PostModel
                    .aggregate([
                        {   $match: { 'post_topic': topicName },},
                        {   $lookup:{
                                from:"user",
                                localField:"post_author",
                                foreignField:"_id",
                                as:"post_author"
                            }
                        },
                        {
                            $project: {
                                'post_author.name':1,'post_author._id':1,
                                'post_state':{$not:['delete']},
                                "post_title": {$substrCP:["$post_title",0,60]},  
                                'post_content': {$substrCP:["$post_content",0,100]},
                                'post_clicked': 1, 'updatedAt': 1,
                                "post_reply_count": 1
                            },
                        }
                    ])
                    .sort({ 'updatedAt': -1 })
                    .skip(skipCount)
                    .limit(PAGE_ROW_LIMIT)
                    .exec((err, topic) => {
                        callback(err, topic)
                    })}
        })
    },
}
module.exports = TopicController;