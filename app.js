var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
const mongoose = require('mongoose');
const mongurl = 'mongodb://sudheerec107:'+ encodeURIComponent('Ch@ngeMe107') + '@ds151753.mlab.com:51753/blog';
const post = require('./routes/post');
const user = require('./routes/user');


mongoose.connect(mongurl,{ useNewUrlParser: true }, (err, success) => {
    console.log(err)
    if (err) {
        console.log('Unable to connect mongodb');
    } else {
        console.log('Successfully connected to mongodb');
    }
});

app.use(express.static('./UI'));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/UI'));
});

app.use('/api/post', post);
app.use('/api/user', user);

app.listen(process.env.PORT || 3000, (err, success) => {
    if (err) {
        console.log('Unable to run on port 3000');
    } else {
        console.log('Successfully running on port 3000')
    }
});
