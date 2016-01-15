/**
 * Created by s.zhitenev on 12.01.2016.
 */

'use strict';
var express = require('express');
var app = express();

var port = 9090;

app.use(express.static(__dirname  + '/dist'));

app.get('/', function(req, res) {
   res.sendfile('index.html');
});

app.listen(port, function(){
    console.log('Server started at localhost:' + port);
});