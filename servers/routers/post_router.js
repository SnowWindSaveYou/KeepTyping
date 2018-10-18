const express = require('express');
const router = express.Router();

const PostContoller = require('../scripts/controllers/post_controller')
const Token = require('../scripts/utils/token')

router.get('/getPost/:postId',(req,res,next)=>{
    PostContoller.getPost(req.params.postId,
        function(err,data){
            res.json({
                success:true,
                message:"get the post",
                data:data
            })
        })
})

router.get('/getReplys/:postId',(req,res,next)=>{
    PostContoller.getReplys(req.params.postId, req.query.page ?req.query.page:0,
        function(err,data){
            res.json({
                success:true,
                message:"get the post reply",
                data:data
            })
        })
})

router.post('/postReply/:postId',(req,res,next)=>{
    var tokenMsg = Token.checkToken(req.headers['token'] );
    if(tokenMsg){
        if(req.body.reply_content.length<15){
            res.json({
                success:"warn",
                message:"post too short",
                })
        }else{
            PostContoller.postReply(    req.params.postId,
                tokenMsg.data.user_id, 
                req.body.reply_content)
            res.json({
            success:true,
            message:"post success",
            })
        }
    }else{
        res.json(tokenMsg)
    }
})

/**
 * Delete self post reply
 * update the post state to delete
 * json{reply_id}
 */
router.delete('/deleteReply/:postId',(req,res,next)=>{
    var tokenMsg = Token.checkToken(req.headers['token'] );
    if(tokenMsg){
        PostContoller.deleteReply(  req.params.postId,
                                    req.body.reply_id,
                                    tokenMsg.data.user_id)
        res.json({
            success:true,
            message:"post success",
        })
    }else{
        res.json(tokenMsg)
    }
})

router.get('/getSubReplys/:postId',(req,res,next)=>{
    // PostContoller.getReplys(req.params.postId, req.query.page,
    //     function(data){
    //         res.json(data)
    //     })
})

router.post('/postSubReply/:postId',(req,res,next)=>{
    // tokenMsg = Token.checkToken(req.headers['token'] );
    // if(tokenMsg){
    //     PostContoller.createReply(  req.params.postId,
    //                                 tokenMsg.user_id, 
    //                                 req.body.reply_content)
    // }
})

module.exports = router