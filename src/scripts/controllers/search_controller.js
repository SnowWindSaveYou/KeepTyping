/**
 * Control the search request of topic, post, user
 * use keyword and return result by callback
 */

import axios from "axios";

const SEARCH_TOPICS_API = "/api/m/search/getTopics/";
const SEARCH_POSTS_API = "/api/m/search/getPosts/";
const SEARCG_USERS_API = "/api/m/search/getUsers/";

var SearchController = {
  getTopics(keyword, callback) {
    axios
      .get(SEARCH_TOPICS_API + keyword)
      .then(function(res) {
        console.log(res.data);
        if (res.data.success) {
          callback(res.data.data);
        } else {
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  getPosts(keyword, callback) {
    axios
      .get(SEARCH_POSTS_API + keyword)
      .then(function(res) {
        console.log(res.data);
        if (res.data.success) {
          callback(res.data.data);
        } else {
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  getUsers(keyword, callback) {
    axios
      .get(SEARCG_USERS_API + keyword)
      .then(function(res) {
        console.log(res.data);
        if (res.data.success) {
          callback(res.data.data);
        } else {
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};

export default SearchController;
