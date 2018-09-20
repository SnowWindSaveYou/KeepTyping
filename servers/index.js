/**
 * This is the Back-End Server
 * it will process the back-end request
 */
const express = require('express');
const router = express.Router()
const app = express();
const bodyParser = require('body-parser');
const config = require('config');

const token = require('./scripts/token');

/** Configs */
const MY_PORT = config.get("back.port");
const DB_PORT = config.get("db.port");
const DB_OPTIONS = {
    user: 'admin123',
    pass: 'qwer123456~'
}

// Use JSON in parser of url body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

/** Connect the Mongo Database */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:'+DB_PORT+'/keeptyping', { useNewUrlParser: true },
    function(err){
        if(err){ console.log('-- db connection fail '+ err)
        }else{ console.log('-- db connection surcess ')}
    });
const UserModel = require('./models/user');
const TopicModel = require('./models/topic');
const PostModel = require('./models/post');

/** Router Components */
const AuthRouter = require('./routers/auth_router');
const LoginRouter = require('./routers/login_router');
const RegisteRouter = require('./routers/registe_router');
const TopicRouter = require('./routers/topic_router');


app.get('/', (req, res) => {
    res.send("welcome");
});
// Authenticate token
app.use('/auth',AuthRouter);
// secure login
app.use('/login',LoginRouter);
// secure registe
app.use('/registe',RegisteRouter);
// secure registe
app.use('/topic',TopicRouter);

// get all users in database
app.get('/getUserList',(req,res,next)=>{
    UserModel.find({}).sort({'id':-1}).exec((err,userList)=>{
        if(err){
            console.log(err);
        }else{
            res.json(userList);
        }
    })
})

// get all Topic in database
app.get('/getTopicList',(req,res,next)=>{
    TopicModel.find({}).sort({'_id':-1}).exec((err,postList)=>{
        if(err){
            console.log(err);
        }else{
            res.json(postList);
        }
    })
})
// get Topic in database
app.get('/topic/:name',(req,res,next)=>{
    console.log(req.params.name);
    TopicModel.find({topic_title:req.params.name}).exec((err,topic)=>{
        if(err){
            console.log(err);
        }else{
            //TODO TEST: add post to topic
            TopicModel.update({topic_title:req.params.name},
                {$push:{topic_posts:12345}},function(err,docs){
                    console.log('pushed')
                })

            res.json(topic);
        }
    })
})

// registe one user 
app.post('/registeUser', (req, res,next) => {
    let newUser = req.body;
    UserModel.create(newUser,(err)=>{
        if(err){
            console.log(err);
        }else{
            res.json(true);
        }
    })
});

server = app.listen(MY_PORT, () => {
    console.log('Running on http://localhost:'+MY_PORT);
})