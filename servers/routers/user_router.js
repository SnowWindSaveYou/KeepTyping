const express = require("express");
const router = express.Router();
const Token = require("../scripts/utils/token");
const UserControlle = require("../scripts/controllers/user_controller");
/**
 * Get the user information
 */
router.get("/getUser/:userId", (req, res) => {
  UserControlle.getUserOverView(req.params.userId, (err, data) => {
    if (!err) {
      res.json({
        success: true,
        message: "get the user posts",
        data: data
      });
    } else {
      res.json({
        success: false,
        message: "get the user posts"
      });
    }
  });
});
/**
 * Get the user's posts
 */
router.get("/getUserPosts/:userId", (req, res) => {
  UserControlle.getUserPosts(
    req.params.userId,
    req.query.page ? req.query.page : 0,
    (err, data) => {
      res.json({
        success: true,
        message: "get the user posts",
        data: data
      });
    }
  );
});
/**
 * Get the posts for the logged in user.
 */
router.get("/getMyPosts", (req, res) => {
  tokenMsg = Token.checkToken(req.headers["token"]);
  if (tokenMsg.success) {
    UserControlle.getUserPosts(
      tokenMsg.data.user_id,
      req.query.page ? req.query.page : 0,
      (err, data) => {
        if (err) {
          res.json({
            success: false,
            message: "get failed"
          });
        } else {
          res.json({
            success: true,
            message: "get the user posts",
            data: data
          });
        }
      }
    );
  } else {
    res.json(tokenMsg);
  }
});

module.exports = router;
