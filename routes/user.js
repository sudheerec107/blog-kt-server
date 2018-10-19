const express = require('express');
const router = express.Router();
const user = require('../model/user');

router.get('/login', function(req, res){
   res.send('GET route on things.');
});
router.post('/', function(req, res){
   res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;