const UserModel = require('../../models/user')
const TopicModel = require('../../models/topic')
const PostModel = require('../../models/post')

const PAGE_ROW_LIMIT = 10

var SearchController ={
    /**
     * search topics by keyword
     * @param {*} keyword 
     * @param {*} callback 
     */
    getTopics(keyword,callback){
        TopicModel.find({$text:{$search:keyword,$caseSensitive:false}},
            ['title','description','member_num','post_num','tags'])
        .limit(PAGE_ROW_LIMIT)
        .exec((err,topic)=>{
            callback(err,topic)
        })
    },

    /**
     * search posts by keyword
     * @param {*} keyword 
     * @param {*} callback 
     */
    getPosts(keyword,callback){
        PostModel.aggregate([
            {   $match: { 
                    $text:{ 
                        $search:keyword, 
                        $caseSensitive:false
                    }}
            },
            {   $lookup:{
                    from:"user",
                    localField:"post_author",
                    foreignField:"_id",
                    as:"post_author"
                }
            },
            {
                $project: {
                    'post_author.name':1,'post_author._id':1,'post_topic':1,
                    'post_state':{$not:['delete']},
                    "post_title": {$substrCP:["$post_title",0,60]},  
                    'post_content': {$substrCP:["$post_content",0,100]},
                    'post_clicked': 1, 'updatedAt': 1,
                    "post_reply_count": 1
                },
            }
        ])
        .limit(PAGE_ROW_LIMIT)
        .exec((err,data)=>{
            callback(err,data)
        })
    },
    /**
     * search topics by keyword
     * @param {*} keyword 
     * @param {*} callback 
     */
    getUsers(keyword,callback){
        UserModel.find({$text:{$search:keyword,$caseSensitive:false}},
            ['name','avater','bias'])
        .limit(PAGE_ROW_LIMIT)
        .exec((err,topic)=>{
            callback(err,topic)
        })
    },
}

module.exports = SearchController;