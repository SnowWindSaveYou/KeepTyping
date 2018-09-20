const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Topic = new Schema({
    topic_title:{
        type:String,
        required:true,
        index:true,
        unique:true
    },
    topic_description:{
        type:String
    },
    topic_managers:{
        type:Array
    }
},{ timestamps: true , collection:'topic'})

module.exports = Topic;
