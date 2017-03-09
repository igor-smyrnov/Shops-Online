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
let selectProductsByShopId = 'SELECT * FROM products WHERE shop_id = ?';
let selectSingleProductBySlug = 'SELECT * FROM products WHERE slug = ?';
let selectAllShops = 'SELECT * FROM shops';
let selectSingleShopById = 'SELECT * FROM shops WHERE id = ?';
let selectSingleShopBySlug = 'SELECT * FROM shops WHERE slug = ?';
let createDbStructure_SQL = fs.readFileSync(__dirname+'/shops_online-structure.sql', { encoding : 'utf8'});
let createDbData_SQL = fs.readFileSync(__dirname+'/shops_online-data.sql', { encoding : 'utf8'});
let dropTables = "SET FOREIGN_KEY_CHECKS=0; DROP TABLE products, shops, pages, orders, categories";
let showTablesLike = "SHOW TABLES LIKE ?";
let insertJSON_SQL = "SET FOREIGN_KEY_CHECKS=0; INSERT INTO `products` SET ?";

function getProducts (callback) {
    pool.getConnection(function (err, connection) {
        if (err) callback({"error": err});

        isTableExist('products', function (err, answer) {
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

function getProductsByShopId(shop_id, callback) {
    pool.getConnection(function (err, connection) {
        if (err) callback({"error": err});

        isTableExist('products', function (err, answer) {
            if (err) callback({"error": err});
            if(answer.result) {
                connection.query(selectProductsByShopId, [shop_id], function (err, rows) {
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

        isTableExist('products', function (err, answer) {
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

function getShops (callback) {
    pool.getConnection(function (err, connection) {
        if (err) callback({"error": err});

        isTableExist('shops', function (err, answer) {
            if (err) callback({"error": err});
            if(answer.result) {
                connection.query(selectAllShops, function (err, rows) {
                    connection.release();
                    callback(err, rows);
                });
            }
            else callback({"error": "There are no tables in DB!"})
        });
    });
}

function getShopById(id, callback) {
    pool.getConnection(function (err, connection) {
        if (err) callback({"error": err});

        isTableExist('shops', function (err, answer) {
            if (err) callback({"error": err});
            if(answer.result) {
                connection.query(selectSingleShopById, [id], function (err, rows) {
                    connection.release();
                    callback(err, rows[0]);
                });
            }
            else callback({"error": "There are no tables in DB!"})
        });
    });
}

function getShopBySlug(slug, callback) {
    pool.getConnection(function (err, connection) {
        if (err) callback({"error": err});

        isTableExist('shops', function (err, answer) {
            if (err) callback({"error": err});
            if(answer.result) {
                connection.query(selectSingleShopBySlug, [slug], function (err, rows) {
                    connection.release();
                    callback(err, rows[0]);
                });
            }
            else callback({"error": "There are no tables in DB!"})
        });
    });
}

function createTablesData(callback) {
    pool.getConnection(function (err, connection) {
        if (err) callback({"error": err});

        isTableExist('products', function (err, answer) {
            if(answer.result) {
                connection.query(createDbData_SQL, function (err, rows) {
                    connection.release();
                    callback({"error": err}, rows);
                });
            }
            else callback({"error": "There are no tables in DB!"})
        });
    });
}

function createTables(callback) {
    pool.getConnection(function (err, connection) {
        if (err) callback({"error": err});

        isTableExist('products', function (err, answer) {
            if(!answer.result) {
                connection.query(createDbStructure_SQL, function (err, rows) {
                    connection.release();
                    callback(err, rows);
                });
            }
            else callback({"error": "The DB already have tables!"});
        })
    })
}

function removeTables(callback) {
    pool.getConnection(function (err, connection) {
        if (err) callback({"error": err});

        isTableExist('products', function (err, answer) {
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

function insertJSON(insertion, callback) {
    pool.getConnection(function (err, connection) {
        if (err) callback({"error": err});

        isTableExist('products', function (err, answer) {
            if(answer.result) {

                let insert = '';
                for(let i = 0; i < insertion.length; i++){
                    insertion[i].id = null;
                    insertion[i].shop_id = parseInt(insertion[i].shop_id);
                    insertion[i].category_id = parseInt(insertion[i].category_id);
                    insertion[i].price = parseFloat(insertion[i].price);
                    if(insertion[i].old_price === '') insertion[i].old_price = null;
                    else insertion[i].old_price = parseFloat(insertion[i].old_price);
                    let product = insertion[i];
                    insert += connection.query(insertJSON_SQL, product).sql + '; ';
                }

                connection.query(insert, function (err, rows) {
                    connection.release();
                    callback({"error": err}, rows);
                });
            }
            else callback({"error": "There are no tables in DB!"})
        });
    });
}

function isTableExist(tableName, callback) {
    pool.getConnection(function (err, connection) {
        if (err) callback({"error": err});

        connection.query(showTablesLike, [tableName], function (err, rows) {
            let rowsExistence = {"result":0};
            if (rows.length) rowsExistence.result = 1;
            connection.release();
            callback(err, rowsExistence);
        });
    });
    
}

module.exports = {
    getProducts: getProducts,
    getProductsByShopId: getProductsByShopId,
    getProductBySlug: getProductBySlug,
    getShops: getShops,
    getShopById: getShopById,
    getShopBySlug: getShopBySlug,
    createTablesData: createTablesData,
    createTables: createTables,
    removeTables: removeTables,
    insertJSON: insertJSON
};
