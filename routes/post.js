const express = require('express');
const router = express.Router();
const post = require('../model/post');

router.get('/', function(req, res){
    post.find(function(err, postVal) {
        console.log(postVal);
        if(err) {
            console.log('eror  >', err);
            res.send(err);
        } else {
            res.send(postVal);
        }
    });
});
router.post('/', function(req, res) {
    console.log('req.body    >', req.body)
    var post_db = new post(req.body.params);
    post_db.save(function(err, success) {
        if (err) {
            console.log('eror  >', err);
            res.send('POST route on things.');
        } else {
            res.send('successs');
        }
    })
});

//export this router to use in our index.js
module.exports = router;