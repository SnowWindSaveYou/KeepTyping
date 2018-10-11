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
    TopicContoller.getTopic(req.params.topicName, (err, data) => {
        if(err){
            res.json({
                success:false,
                message:"Topic Err"
            });
        }else if(!data){
            res.json({
                success:false,
                message:"Topic not found"
            });
        }else{
            res.json({
                success:true,
                message:"Topic",
                data:data
            });
        }
    })
})
/**
 * create a new topic
 * @param topicName 
 * @returns topic: topic description,manager, etc.
 */
router.post('/createTopic/:topicName', (req, res, next) => {
    var tokenMsg = Token.checkToken(req.headers['token'] );
    if(tokenMsg.success){
        TopicContoller.createTopic(req.params.topicName,tokenMsg.data.user_id,(err,data)=>{
            if(err){
                if(err.code===11000){
                    res.json({
                        success:false,
                        message:"Topic Exist",
                    });
                }else{
                    res.json({
                        success:false,
                        message:"Topic Err",
                    });
                }
            }else{
                res.json({
                    success:true,
                    message:"Topic Create"
                });
            }
        })
    }else{
        res.json(tokenMsg);
    }

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
        if (tokenMsg.success) {
            TopicContoller.postPost(
                req.params.topicName,
                tokenMsg.data.user_id,
                req.body.post_title,
                req.body.post_content,(err,data)=>{
                    if(err){
                        res.json({
                            success:false,
                            message:"post failed"
                        });
                    }else{
                        res.json({
                            success:true,
                            message:"post success"
                        });
                    }
                })
        }else{
            res.json(tokenMsg);
        }
    }
});

/** 
 * Get Posts in Topic
 * split search result by page
 * @param topicName, page
 * @returns 
 */
router.get('/getPosts/:topicName', (req, res) => {
    TopicContoller.getPosts(req.params.topicName, req.query.page, 
        (err, data) => {
            if(err){
                res.json({
                    success:false,
                    message:err
                });
            }else{
                res.json({
                    success:true,
                    message:'get posts',
                    data:data
                });
            }
        })
});


router.get('/followTopic/:topicName', (req, res) => {
    tokenMsg = Token.checkToken(req.headers['token']);
    if (tokenMsg.success) {
        TopicContoller.followTopic(
            req.params.topicName,
            tokenMsg.data.user_id,(err)=>{
                if(err){
                    res.json({
                        success:false,
                        message:"follow failed"
                    });
                }else{
                    res.json({
                        success:true,
                        message:"follow success"
                    });
                }
            })
    }else{
        res.json(tokenMsg);
    }
});
router.get('/unfollowTopic/:topicName', (req, res) => {
    tokenMsg = Token.checkToken(req.headers['token']);
    if (tokenMsg.success) {
        TopicContoller.unfollowTopic(
            req.params.topicName,
            tokenMsg.data.user_id,(err,data)=>{
                if(err){
                    res.json({
                        success:false,
                        message:"follow failed"
                    });
                }else{
                    res.json({
                        success:true,
                        message:"unfollow success"
                    });
                }
            })
    }else{
        res.json(tokenMsg);
    }
});




module.exports = router