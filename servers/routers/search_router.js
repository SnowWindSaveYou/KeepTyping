const express = require('express');
const router = express.Router();

const TopicContoller = require('../scripts/controllers/topic_controller')

const Token = require('../scripts/utils/token')


/**
 * get Topic info in database
 * @param topicName 
 * @returns topic: topic description,manager, etc.
 */
router.get('/getTopics/:keyword', (req, res) => {
    TopicContoller.getTopics(req.params.keyword, (err, data) => {
        if(err){
            console.log(err)
            res.json({
                success:false,
                message:"Search Err"
            });
        }else if(!data){
            res.json({
                success:false,
                message:"No Result"
            });
        }else{
            res.json({
                success:true,
                message:"Topics",
                data:data
            });
        }
    })
})
/**
 * get Topic info in database
 * @param topicName 
 * @returns topic: topic description,manager, etc.
 */
router.get('/getPosts/:keyword', (req, res) => {
    // TopicContoller.getTopics(req.params.keyword, (err, data) => {
    //     if(err){
    //         console.log(err)
    //         res.json({
    //             success:false,
    //             message:"Search Err"
    //         });
    //     }else if(!data){
    //         res.json({
    //             success:false,
    //             message:"No Result"
    //         });
    //     }else{
    //         res.json({
    //             success:true,
    //             message:"Topics",
    //             data:data
    //         });
    //     }
    // })
})
/**
 * get Topic info in database
 * @param topicName 
 * @returns topic: topic description,manager, etc.
 */
router.get('/getUsers/:keyword', (req, res) => {
    // TopicContoller.getTopics(req.params.keyword, (err, data) => {
    //     if(err){
    //         console.log(err)
    //         res.json({
    //             success:false,
    //             message:"Search Err"
    //         });
    //     }else if(!data){
    //         res.json({
    //             success:false,
    //             message:"No Result"
    //         });
    //     }else{
    //         res.json({
    //             success:true,
    //             message:"Topics",
    //             data:data
    //         });
    //     }
    // })
})



module.exports = router