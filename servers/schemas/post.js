const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Post = new Schema({
    post_author:{
        type:String
    },
    post_content:{
        type:String
    },
    post_replys:{
        type:Array
    },
},{ timestamps: true , collection:'post'})

module.exports = Post;
