"use strict";

let config = require('./config.json');
let mysql = require('mysql');
let fs = require('fs');

let pool =  mysql.createPool({
    port: config.mysql_port,
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
let dropTables = `SET FOREIGN_KEY_CHECKS=0; DROP TABLE ` +
    `${config.db_name}.products,` +
    `${config.db_name}.shops`;

let showTablesLike = "SHOW TABLES LIKE ?";
let insertJSON_SQL = `SET FOREIGN_KEY_CHECKS=0; INSERT INTO ${config.db_name}.products VALUES`;

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
                connection.query(createDbData_SQL, function (err) {
                    connection.release();
                    if (err && err.code && err.code === "ER_DUP_ENTRY") err = {"error": "Data has been duplicated!"};
                    callback(err, {"success": "Tables data has been created!"});
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
                connection.query(createDbStructure_SQL, function (err) {
                    connection.release();
                    callback(err, {"success": "Tables has been created!"});
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
                connection.query(dropTables, function (err) {
                    connection.release();
                    callback(err, {"success": "Tables has been removed!"});
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
                let query = insertJSON_SQL;
                for(let i=1; i < insertion.length; i++){
                    query += '(' ;
                    for(let j=0; j < insertion[i].length; j++){
                        if(insertion[i][j] === "") query += null + ',';
                        else {
                            query += '"' + insertion[i][j];
                            if (!(j === insertion[i].length - 1)) query += '",';
                            else query += '"';
                        }
                    }
                    if(!(i === insertion.length-1)) query += '), ';
                    else query += '); ';
                    // console.log(query);
                }

                connection.query(query, function (err) {
                    connection.release();
                    if (err && err.code && err.code === "ER_DUP_ENTRY") err = {"error": "Data has been duplicated!"};
                    callback(err,
                        {"success": "Data has been imported to DB!"});
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
