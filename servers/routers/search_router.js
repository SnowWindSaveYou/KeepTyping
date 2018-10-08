const express = require('express');
const router = express.Router();

const SearchContoller = require('../scripts/controllers/search_controller')

const Token = require('../scripts/utils/token')


/**
 * get Topic info in database
 * @param topicName 
 * @returns topic: topic description,manager, etc.
 */
router.get('/getTopics/:keyword', (req, res) => {
    SearchContoller.getTopics(req.params.keyword, (err, data) => {
        if(err){
            console.log(err)
            res.json({
                success:false,
                message:"Search Err"
            });
        }else if(data===0){
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
    SearchContoller.getPosts(req.params.keyword, (err, data) => {
        if(err){
            console.log(err)
            res.json({
                success:false,
                message:"Search Err"
            });
        }else if(data.length===0){
            res.json({
                success:false,
                message:"No Result"
            });
        }else{
            res.json({
                success:true,
                message:"Posts",
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
router.get('/getUsers/:keyword', (req, res) => {
    SearchContoller.getUsers(req.params.keyword, (err, data) => {
        if(err){
            console.log(err)
            res.json({
                success:false,
                message:"Search Err"
            });
        }else if(data.length===0){
            res.json({
                success:false,
                message:"No Result"
            });
        }else{
            res.json({
                success:true,
                message:"Users",
                data:data
            });
        }
    })
})



module.exports = router