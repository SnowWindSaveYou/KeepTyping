const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const UserModel = require('../../models/user')
const TopicModel = require('../../models/topic')
const PostModel = require('../../models/post')

const PAGE_ROW_LIMIT = 10

var UserController ={

    getUserOverView(userId, callback){
        UserModel
        .findById(userId,
            {'name':1,'avater':1,'bias':1,
            'topics':{$slice:8},
            'following_num':1,'follower_num':1})
        .exec((err,data)=>{
            callback(err,data)
        })
    },
    getUserDetail(userId, callback){
        UserModel
        .findById(userId,['name','avater','bias','topics','following','following_num','follower_num'])
        .exec((err,data)=>{
            callback(err,data)
        })
    },

    getUserPosts(userId,page,callback){
        var skipCount = page * PAGE_ROW_LIMIT;
        PostModel
        .aggregate([
            {   $match: { 'post_author': ObjectId( userId) },},
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
                    'post_topic':1,
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
        .exec((err, posts) => {
            console.log('s',posts)
            callback(err, posts)
    })},

    // --------------------------------------------------------------------
    // User Actions
    // --------------------------------------------------------------------
    followUser(toUserId,userId,callback){
        UserModel.findByIdAndUpdate(toUserId,{$push:{follower:userId},$inc:{follower_num:1}},(err,res)=>{
            if(!err){
                UserModel.findByIdAndUpdate(userId,{$push:{following:toUserId},$inc:{following_num:1}}).exec()
                callback()
            }else{
                callback(err)
            }
        })
    },
    unfollowUser(toUserId,userId,callback){
        UserModel.findByIdAndUpdate(toUserId,{$pull:{follower:userId},$inc:{follower_num:-1}},(err,res)=>{
            if(!err){
                UserModel.findByIdAndUpdate(userId,{$pull:{following:toUserId},$inc:{following_num:-1}}).exec()
                callback()
            }else{
                callback(err)
            }
        })
    },
    

}

module.exports = UserController;