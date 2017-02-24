"use strict";

let express = require('express');
let app = express();

app.get('/getProducts', function (request, response) {
    console.log("--GET--");

    response.send("Hello!");
});

// Server starter

app.use(express.static(__dirname + "/"));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log('App started at localhost:' + app.get('port'));
});