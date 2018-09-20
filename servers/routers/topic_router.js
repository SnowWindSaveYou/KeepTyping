const express = require('express');
const router = express.Router();

const PostModel = require('../models/post');
const TopicModel = require('../models/topic');

const PostContoller = require('../scripts/post_controller')

const PAGE_ROW_LIMIT = 10

/**
 * get Topic info in database
 * @param topicName 
 * @returns topic: topic description,manager, etc.
 */
router.get('/topic/:topicName',(req,res,next)=>{
    TopicModel.findOne({topic_title:req.params.topicName})
    .exec((err,topic)=>{
        if(err){
            console.log(err);
        }else{
            res.json(topic);
        }
    })
})
/**
 * get Topic info in database
 * @param topicName 
 * @returns topic: topic description,manager, etc.
 */
router.post('/topic/:topicName',(req,res,next)=>{
    new_topic = new TopicModel({topic_title:req.params.topicName});
    new_topic.save();
    res.json(true);
})

/** 
 * Get Posts in Topic
 * split search result by page
 * @param topicName, page
 * @returns posts:[post_author,post_title,post_content,post_clicked]
 */
router.get('/posts/:topicName',(req,res) =>{
    var skipCount = 0;
    if(req.query.page){
        skipCount = req.query.page * PAGE_ROW_LIMIT;
    }

    PostModel
    .find({post_topic:req.params.topicName},['_id','post_author','post_title','post_content','post_clicked','updatedAt'])
    .sort({'updatedAt':-1})
    .limit(PAGE_ROW_LIMIT)
    .skip(skipCount)
    .exec((err,topic)=>{
        if(err){
            console.log(err);
        }else{
            res.json(topic);
        }
    })
});

/** 
 * Get Posts in Topic
 * split search result by page
 * @param topicName, page
 * @returns posts:[post_author,post_title,post_content,post_clicked]
 */
router.post('/post/:topicName',(req,res) =>{
    console.log(req.body)
    PostContoller.createPost(   req.body.topic,
                                req.body.author, 
                                req.body.post_title,
                                req.body.post_content)
});



module.exports = router