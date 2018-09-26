const UserModel = require('../../models/user')
const TopicModel = require('../../models/topic')
const PostModel = require('../../models/post')

const PAGE_ROW_LIMIT = 10

var UserController ={
    
    getUserOverView(userId, callback){
        UserModel
        .findOne({_id:postId},[])
        .exec((err,data)=>{

        })
    },
    getUserDetail(userId, callback){
        
    }
}

module.exports = UserController;