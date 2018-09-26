const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Topic = new Schema({
    title:{
        type:String,
        required:true,
        index:true,
        unique:true
    },
    description:{
        type:String,
        default:'welcome'
    },
    managers:[{
        type:Schema.Types.ObjectId,
        ref: 'user'
    }],
    tags:{
        type:Array
    },
    member_num:{
        type:Number,
        default:0
    },
    post_num:{
        type:Number,
        default:0
    },
    configs:[{
        name:String,
        content:String
    }],
    blacklist:[{
        type:Schema.Types.ObjectId,
        ref: 'user',
        time:Number,
        banAt:{
            type:Date,
            default:Date.now
        }
    }],
},{ timestamps: true , collection:'topic'})

module.exports = Topic;
