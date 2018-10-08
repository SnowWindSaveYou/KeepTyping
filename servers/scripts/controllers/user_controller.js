const UserModel = require('../../models/user')
const TopicModel = require('../../models/topic')
const PostModel = require('../../models/post')

const PAGE_ROW_LIMIT = 10

var UserController ={

    getUserOverView(userId, callback){
        UserModel
        .findById(userId,['name','avater','bias'])
        .exec((err,data)=>{
            callback(err,data)
        })
    },
    getUserDetail(userId, callback){
        UserModel
        .findById(userId,['name','avater','bias','topics','following','follower_num'])
        .exec((err,data)=>{
            callback(err,data)
        })
    },

    // --------------------------------------------------------------------
    // User Actions
    // --------------------------------------------------------------------


}

module.exports = UserController;