"use strict";

let config = require('./config.json');
let mysql = require('mysql');
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
let createDbSQL = "CREATE DATABASE IF NOT EXISTS ?";
let dropTables = "SET FOREIGN_KEY_CHECKS=0; DROP TABLE products, shops, pages, orders, categories CASCADE";
let showTableProducts = "SHOW TABLES LIKE 'products'";

function getProducts (callback) {
    pool.getConnection(function (err, connection) {
        if (err) callback({"error": err});

        isStructureExist(function (err, answer) {
            if (err) callback({"error": err});
            if(answer.result) {
                connection.query(selectAllProducts, function (err, rows) {
                    connection.release();
                    callback(err, rows);
                });
            }
            else callback({"error": "There are no tables in DB!"})
        });
    });
}

function getProductBySlug(slug, callback) {
    pool.getConnection(function (err, connection) {
        if (err) callback({"error": err});

        isStructureExist(function (err, answer) {
            if (err) callback({"error": err});
            if(answer.result) {
                connection.query(selectSingleProductBySlug, [slug], function (err, rows) {
                    connection.release();
                    callback(err, rows[0]);
                });
            }
            else callback({"error": "There are no tables in DB!"})
        });
    });
}

function createDbData(callback) {
    pool.getConnection(function (err, connection) {
        if (err) callback({"error": err});

        isStructureExist(function (err, answer) {
            if (err) callback({"error": err});
            if(answer.result) {
                connection.query(createDbDataSQL, function (err, rows) {
                    connection.release();
                    callback(err, rows);
                });
            }
            else callback({"error": "There are no tables in DB!"})
        });
    });
}

function createDbTables(callback) {
    pool.getConnection(function (err, connection) {
        if (err) callback({"error": err});

        isStructureExist(function (err, answer) {
            if (err) callback({"error": err});
            if(!answer.result) {

                connection.query(createDbStructureSQL, function (err, rows) {
                    connection.release();
                    callback(err, rows);
                });
            }
            else callback({"error": "The DB already have tables!"});
        })
    })
}

//TODO: is it necessary?
function createDb(callback) {
    pool.getConnection(function (err, connection) {
        if (err) callback({"error": err});

        connection.query(createDbSQL, [config.db_name], function (err, rows) {
            connection.release();
            callback(err, rows);
        });
    });
}

function removeTables(callback) {
    pool.getConnection(function (err, connection) {
        if (err) callback({"error": err});

        isStructureExist(function (err, answer) {
            if (err) callback({"error": err});
            if(answer.result) {
                connection.query(dropTables, function (err, rows) {
                    connection.release();
                    callback(err, rows);
                });
            }
            else callback({"error": "There are no tables in DB!"})
        });
    });
}

function isStructureExist(callback) {
    pool.getConnection(function (err, connection) {
        if (err) callback({"error": err});

        connection.query(showTableProducts, function (err, rows) {
            let rowsExistence = {"result":0};
            if (rows.length) rowsExistence.result = 1;
            connection.release();
            callback(err, rowsExistence);
        });
    });
    
}

module.exports = {
    getProducts: getProducts,
    getProductBySlug: getProductBySlug,
    createDbData: createDbData,
    createDbTables: createDbTables,
    createDb: createDb,
    removeTables: removeTables,
    isStructureExist: isStructureExist
};
