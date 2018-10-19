import axios from "axios";
import { notificationShow } from "./dialog_controller";
import LoginController from "./login_controller";

const PAGE_QUERE = "?page=";
const CREATE_TOPIC_API = "/api/m/topic/createTopic/";
const GET_TOPIC_API = "/api/m/topic/getTopic/";
const GET_POSTS_API = "/api/m/topic/getPosts/";
const POST_POST_API = "/api/m/topic/postPost/";
const FOLLOW_TOPIC_API = "/api/m/topic/followTopic/";
const UNFOLLOW_TOPIC_API = "/api/m/topic/unfollowTopic/";
/**
 * Control requests for topic.
 * Create topics and posts, get topic and posts, follow and un-follow topic from the server.
 */
var TopicController = {
  createTopic(topic, callback) {
    if (!localStorage.getItem("token")) {
      notificationShow("Please Login first", "warn");
    }
    axios
      .post(
        CREATE_TOPIC_API + topic,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token")
          }
        }
      )
      .then(data => {
        if (data.data.success) {
          notificationShow("Topic is Created", true, () => {
            document.location.href = "/t/" + topic;
          });
        }
      });
  },
  getTopic(topic, callback) {
    axios
      .get(GET_TOPIC_API + topic)
      .then(function(res) {
        if (res.data.success) {
          console.log(res.data.data);
          callback(res.data.data);
        } else {
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  getPosts(topic, page = 0, callback) {
    var posts = [];
    axios
      .get(GET_POSTS_API + topic + PAGE_QUERE + page)
      .then(function(res) {
        if (res.data.success) {
          posts = res.data.data;
          typeof callback === "function" && callback.call(window, posts);
          return posts;
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  postPost(topic, post_title, post_content) {
    axios
      .post(
        POST_POST_API + topic,
        {
          post_title: post_title,
          post_content: post_content
        },
        {
          headers: {
            Token: localStorage.getItem("token"),
            "Content-Type": "application/json"
          }
        }
      )
      .then(function(res) {
        LoginController.checkLogoutMsg(res.data.message);
        notificationShow(res.data.message, res.data.success);
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  followTopic(topic) {
    axios
      .post(
        FOLLOW_TOPIC_API,
        {
          topic: topic
        },
        {
          headers: {
            Token: localStorage.getItem("token"),
            "Content-Type": "application/json"
          }
        }
      )
      .then(function(res) {
        if (!res.data.success) {
          LoginController.checkLogoutMsg(res.data.message);
        } else {
          global.followTopic(topic, true);
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  unfollowTopic(topic) {
    axios
      .post(
        UNFOLLOW_TOPIC_API,
        {
          topic: topic
        },
        {
          headers: {
            Token: localStorage.getItem("token"),
            "Content-Type": "application/json"
          }
        }
      )
      .then(function(res) {
        if (!res.data.success) {
          LoginController.checkLogoutMsg(res.data.message);
        } else {
          global.followTopic(topic, false);
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};

export default TopicController;
