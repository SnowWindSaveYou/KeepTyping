const UserModel = require('../../models/user')
const TopicModel = require('../../models/topic')
const PostModel = require('../../models/post')


const PAGE_ROW_LIMIT = 10

var TopicController = {
    createTopic(topicName){
        new_topic = new TopicModel({topic_title:topicName});
        new_topic.save();
    },
    getTopic(topicName,callback){
        TopicModel.findOne({topic_title:topicName})
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
    postPost(topic, authorID, title, content) {
        // create post and registe under topic
        console.log(topic+authorID+title+content)
        new_post = new PostModel({
            post_topic: topic,
            post_author: authorID,
            post_title: title,
            post_content: content
        });
        new_post.save();
        //TODO: also register the post in author's detail

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
        var skipCount = 0;

        PostModel.count({ 'post_topic': topicName }, (err, num) => {
            if ((num) < page * PAGE_ROW_LIMIT) {
                callback(err, num)
            } else {
                skipCount = page * PAGE_ROW_LIMIT;
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
                                "post_title": {$substrCP:["$post_title",0,60]},  
                                'post_content': {$substrCP:["$post_content",0,100]},
                                'post_clicked': 1, 'updatedAt': 1,
                                "replyNum": { $size: "$post_replys" }
                            },
                        }
                    ])
                    .sort({ 'updatedAt': -1 })
                    .limit(PAGE_ROW_LIMIT)
                    .skip(skipCount)
                    .exec((err, topic) => {
                        topic
                        callback(err, topic)
                    })
            }
        })
    },
}
module.exports = TopicController;