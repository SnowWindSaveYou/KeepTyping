/**
 * Post{ Reply{ SubReply}}
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubReply = new Schema({
    sub_author:{
        type:String,
        required:true
    },
    sub_content:{
        type:String,
        default: ''
    }
},{ timestamps: true})

const Reply = new Schema({
    reply_author:{
        type:String,
        required:true
    },
    reply_content:{
        type:String,
        default: ''
    },
    reply_replys:[SubReply]

},{ timestamps: true})

const Post = new Schema({
    post_topic:{
        type:String,
        required:true
    },
    post_author:{
        type:String,
        required:true
    },
    post_title:{
        type:String,
        required:true
    },
    post_content:{
        type:String,
        default: ''
    },
    post_clicked:{
        type:Number,
        default: 0
    },
    post_replys:[Reply]
},{ timestamps: true , collection:'post'})

module.exports = Post;
