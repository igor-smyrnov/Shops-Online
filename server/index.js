"use strict";

let config = require('./config.json');
let express = require('express');
let fs = require('fs');
let csvToJson = require('csvjson');
let DB = require('./database');
let app = express();

// -- REST

app.get('/getProducts', function (request, response) {
    DB.getProducts(function (err, rows) {
        if (err) response.send(err);
        else response.send(rows);
    });
});

app.get('/getProductsByShopId/:shop_id', function (request, response) {
    DB.getProductsByShopId(request.params.shop_id, function (err, rows) {
        if (err) response.send(err);
        else response.send(rows);
    });
});

app.get('/getProductBySlug/:slug', function (request, response) {
    DB.getProductBySlug(request.params.slug, function (err, rows) {
        if (err) response.send(err);
        else response.send(rows);
    });
});

app.get('/getShops', function (request, response) {
    DB.getShops(function (err, rows) {
        if (err) response.send(err);
        else response.send(rows);
    });
});

app.get('/getShopById/:id', function (request, response) {
    DB.getShopById(request.params.id, function (err, rows) {
        if (err) response.send(err);
        else response.send(rows);
    });
});

app.get('/getShopBySlug/:slug', function (request, response) {
    DB.getShopBySlug(request.params.slug, function (err, rows) {
        if (err) response.send(err);
        else response.send(rows);
    });
});

app.get('/insertCSVtoDB/:filename', function (request, response) {
    let filePath = './import/' + request.params.filename + '.csv';

    if(!fs.existsSync(filePath)) {
        response.send({"error": "file not found"});
    }
    else {
        let jsonProducts = csvToJson.toObject(
            fs.readFileSync(filePath, {encoding: 'utf-8'})
        );

        jsonProducts = JSON.parse(JSON.stringify(jsonProducts).replace(/\"\"/g, null));

        DB.insertJSON(jsonProducts, function (err, rows) {
            if (err) response.send(err);
            else response.send(rows);
        });
    }
});

app.get('/removeTables', function (request, response) {
    DB.removeTables(function (err, rows) {
        if (err) response.send(err);
        else response.send(rows);
    });
});

app.get('/createTables', function (request, response) {
    DB.createTables(function (err, rows) {
        if (err) response.send(err);
        else response.send(rows);
    });
});

app.get('/createTablesData', function (request, response) {
    DB.createTablesData(function (err, rows) {
        if (err) response.send(err);
        else response.send(rows);
    });
});

// Server starter

app.use(express.static(__dirname + "../../"));

app.set('port', process.env.PORT || config.app_port);
app.listen(app.get('port'), function () {
    console.log('App started at localhost:' + app.get('port'));
});