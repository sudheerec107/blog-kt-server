var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
const mongoose = require('mongoose');
const mongurl = 'mongodb://localhost/blog:27017';
const post = require('./routes/post');
const user = require('./routes/user');


mongoose.connect(mongurl, { useNewUrlParser: true }, (err, success) => {
    if (err) {
        console.log('Unable to connect mongodb');
    } else {
        console.log('Successfully connected to mongodb');
    }
});

app.use(express.static('./UI'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/UI'));
});

app.use('/api/post', post);
app.use('/api/user', user);

app.listen('3000', (err, success) => {
    if (err) {
        console.log('Unable to run on port 3000');
    } else {
        console.log('Successfully running on port 3000')
    }
});
