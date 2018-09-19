/**
 * topic_title
 * topic_description
 * topic_manager
 * topic_posts
 */
const mongoose = require('mongoose');
const topicSchema = require('../schemas/topic')
const Topic = mongoose.model('topic',topicSchema)

module.exports = Topic;