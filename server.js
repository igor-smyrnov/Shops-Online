"use strict";

var express = require('express');
var app = express();

app.use(express.static(__dirname + "/"));

// Server starter

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log('App started at localhost:' + app.get('port'));
});