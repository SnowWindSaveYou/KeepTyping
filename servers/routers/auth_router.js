const express = require('express');
const router = express.Router();


const token = require('../scripts/utils/token');

router.post('/createToken',(req,res) =>{
    let msg = req.body;
    res.json(token.createToken(msg,20));
});
router.post('/checkToken',(req,res) =>{
    res.json(token.checkToken(req.headers['token'] ));
});

module.exports = router