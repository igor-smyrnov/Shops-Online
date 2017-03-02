"use strict";

let config = require('./config.json');
let mysql = require('promise-mysql');
let fs = require('fs');

let pool =  mysql.createPool({
    host: config.host,
    user: config.db_user,
    password: config.db_password,
    database: config.db_name,
    multipleStatements: true
});

let selectAllProducts = 'SELECT * FROM products';
let selectSingleProductBySlug = 'SELECT * FROM products WHERE slug = ?';
let createDbStructureSQL = fs.readFileSync(__dirname+'/shops-online-structure.sql', { encoding : 'utf8'});
let createDbDataSQL = fs.readFileSync(__dirname+'/shops-online-data.sql', { encoding : 'utf8'});

function getProducts (callback) {
    pool.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query(selectAllProducts, function (err, rows) {
            connection.release();
            callback(err, rows);
        });
    });
}

function getProductBySlug(slug, callback) {
    pool.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query(selectSingleProductBySlug, [slug], function (err, rows) {
            connection.release();
            callback(err, rows[0]);
        });
    });
}

function createDbData(callback) {
    pool.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query(createDbDataSQL, function (err, rows) {
            connection.release();
            callback(err, rows);
        });
    });
}

function createDbStructure() {
    pool.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query(createDbStructureSQL, function (err, rows) {
            connection.release();
            callback(err, rows);
        });
    });
}

module.exports = {
    getProducts: getProducts,
    getProductBySlug: getProductBySlug,
    createDbData: createDbData,
    createDbStructure: createDbStructure
};
