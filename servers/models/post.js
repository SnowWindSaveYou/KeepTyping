const mongoose = require('mongoose');

const postSchema = require('../schemas/post')
const Post = mongoose.model('post',postSchema.Post)

module.exports = Post;