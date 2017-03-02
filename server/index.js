"use strict";

let config = require('./config.json');
let express = require('express');
let fs = require('fs');
let csvToJson = require('csvjson');
let DB = require('./database');
let app = express();

//-- CSV

let jsonProducts = csvToJson.toObject(fs.readFileSync(__dirname+'/products.csv', { encoding : 'utf8'}));

app.get('/createDb', function (request, response) {
    DB.createDb(function (err, rows) {
        if (err) response.send(err);
        response.send(rows);
    });
});

app.get('/createDbStructure', function (request, response) {
    DB.createDbStructure(function (err, rows) {
        if (err) response.send(err);
        response.send(rows);
    });
});

app.get('/createDbData', function (request, response) {
    DB.createDbData(function (err, rows) {
        if (err) response.send(err);
        response.send(rows);
    });
});

app.get('/getProducts', function (request, response) {
    DB.getProducts(function (err, rows) {
        if (err) response.send(err);
        response.send(rows);
    });
});

app.get('/getProductBySlug/:slug', function (request, response) {
    DB.getProductBySlug(request.params.slug, function (err, rows) {
        if (err) response.send(err);
        response.send(rows);
    });
});

app.get('/removeTables', function (request, response) {
    DB.removeTables(function (err, rows) {
        if (err) response.send(err);
        response.send(rows);
    });
});

app.get('/isStructureExist', function (request, response) {
    DB.isStructureExist(function (err, rows) {
        if (err) response.send(err);
        response.send(rows);
    });
});

// Server starter

app.use(express.static(__dirname + "../../"));

app.set('port', process.env.PORT || config.port);
app.listen(app.get('port'), function () {
    console.log('App started at localhost:' + app.get('port'));
});