const mongoose = require('mongoose');

const userSchema = require('../schemas/post')
const Post = mongoose.model('post',userSchema)

module.exports = Post;