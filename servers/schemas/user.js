/**
 * Set up Object-Document mapping
 * Identify the database
 * Schema主要用于定义MongoDB中集合Collection里文档document的结构　
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
    id:{
        type:String,
        required:true,
        index:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        index:true,
        text:true
    },
    password:{
        type:String,
        required:true
    },
    salt:{
        type:String,
        required:true
    },
    avater:{
        type:String,
        default:""
    },
    bias:{
        type:String,
        default:"this person didn't leave any thing in here"
    },
    topics:[{
        type:String,
    }],
    following_num:{
        type:Number,
        default:0
    },
    following:[{
        type:Schema.Types.ObjectId,
        ref: 'user',
    }],
    follower_num:{
        type:Number,
        default:0
    },
    follower:[{
        type:Schema.Types.ObjectId,
        ref: 'user',
    }],
    user_post_num:{
        type:Number,
        default:0
    },
    user_posts:[{
        type:Schema.Types.ObjectId,
        ref: 'post',
    }],
    user_replys:{
        type:Array
    },
    post_collections:[{
        type:Schema.Types.ObjectId,
        ref: 'post',
    }]
},{ timestamps: true , collection:'user'})

module.exports = User;
