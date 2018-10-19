/**
 * This is the Back-End Server
 * It will process the back-end request
 */
const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const config = require("config");

const token = require("./scripts/utils/token");

/** Configs */
const MY_PORT = config.get("back.port");
const DB_PORT = config.get("db.port");
const DB_OPTIONS = {
  // user: 'admin',
  // pass: 'UR2qejCXEqQnjzJn',
  useNewUrlParser: true
};

// Use JSON in parser of url body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/** Connect the Mongo Database */
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:" + DB_PORT + "/keeptyping",
  DB_OPTIONS,
  function(err) {
    if (err) {
      console.log("-- db connection fail " + err);
    } else {
      console.log("-- db connection surcess ");
    }
  }
);

/** Router Components */
const LoginRouter = require("./routers/login_router");
const RegisteRouter = require("./routers/registe_router");
const TopicRouter = require("./routers/topic_router");
const PostRouter = require("./routers/post_router");
const SearchRouter = require("./routers/search_router");
const UserRouter = require("./routers/user_router");

app.get("/", (req, res) => {
  res.send("welcome");
});
// secure login
app.use("/login", LoginRouter);
// secure registe
app.use("/registe", RegisteRouter);
// topic
app.use("/topic", TopicRouter);
// post
app.use("/post", PostRouter);
// search
app.use("/search", SearchRouter);
// user
app.use("/user", UserRouter);

server = app.listen(MY_PORT, () => {
  console.log("Running on http://localhost:" + MY_PORT);
});
