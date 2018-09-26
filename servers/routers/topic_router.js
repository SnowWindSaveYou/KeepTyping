const express = require('express');
const router = express.Router();

const TopicContoller = require('../scripts/controllers/topic_controller')
const Token = require('../scripts/utils/token')


/**
 * get Topic info in database
 * @param topicName 
 * @returns topic: topic description,manager, etc.
 */
router.get('/getTopic/:topicName', (req, res) => {
    TopicContoller.getTopic(req.param.topicName, (err, data) => {
        res.json(data);
    })
})


/**
 * create a new topic
 * @param topicName 
 * @returns topic: topic description,manager, etc.
 */
router.post('/createTopic/:topicName', (req, res, next) => {
    TopicContoller.createTopic(req.params.topicName)
    res.json(true);
})

/**
 * post a post to the topic
 * @param token, topicName, post_title,post_content
 */
router.post('/postPost/:topicName', (req, res) => {
    if(!req.body.post_title){
        res.json({
            success:false,
            message:"please say some thing"
        });
    }else{
        tokenMsg = Token.checkToken(req.headers['token']);
        console.log("tokenMsg",tokenMsg);
        if (tokenMsg.success) {
            TopicContoller.postPost(
                req.params.topicName,
                tokenMsg.data.user_id,
                req.body.post_title,
                req.body.post_content)
            res.json({
                success:true,
                message:"post success"
            });
        }else{
            res.json(tokenMsg);
        }
    }
});

/** 
 * Get Posts in Topic
 * split search result by page
 * @param topicName, page
 * @returns posts:[post_author,post_title,post_content,post_clicked]
 */
router.get('/getPosts/:topicName', (req, res) => {
    TopicContoller.getPosts(req.params.topicName, 
                            req.query.page, (err, data) => {
                                res.json(data);
                            })
});





module.exports = router