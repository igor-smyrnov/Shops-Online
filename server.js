"use strict";

let express = require('express');
let mysql = require('mysql');
let app = express();

let pool =  mysql.createPool({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'shops-online'
});

let selectAllProducts = 'SELECT * FROM product';
let selectSingleProductBySlug = 'SELECT * FROM product WHERE slug = ?';

app.get('/getProducts', function (request, response) {
    pool.getConnection(function (err, connection) {

        //selectAllProducts
        connection.query(selectAllProducts, function (err, rows) {
            if(err) throw err;
            else
                response.send(rows);
        });

        connection.release();
    });
});

app.get('/getProductBySlug/:slug', function (request, response) {
    pool.getConnection(function (err, connection) {

        //selectAllProducts
        connection.query(selectSingleProductBySlug, [request.params.slug], function (err, rows) {
            if(err) throw err;
            else {
                console.log(request.params);
                response.send(rows[0]);
            }
        });

        connection.release();
    });
});

// Server starter

app.use(express.static(__dirname + "/"));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log('App started at localhost:' + app.get('port'));
});