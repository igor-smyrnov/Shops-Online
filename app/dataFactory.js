"use strict";

SO.factory('dataFactory', function ($http) {
    let promise;

    return {
        getProducts: function () {
            promise = $http
                .get('http://localhost:3000/getProducts')
                .then(response => response.data);
            return promise;
        },
        getProductsByShopId: function (shop_id) {
            promise = $http
                .get('http://localhost:3000/getProductsByShopId/' + shop_id)
                .then(response => response.data);
            return promise;
        },
        getProductBySlug: function (slug) {
            promise = $http
                .get('http://localhost:3000/getProductBySlug/' + slug)
                .then(response => response.data);
            return promise;
        },
        getShops: function () {
            promise = $http
                .get('http://localhost:3000/getShops')
                .then(response => response.data);
            return promise;
        },
        getShopById: function (id) {
            promise = $http
                .get('http://localhost:3000/getShopById/' + id)
                .then(response => response.data);
            return promise;
        },
        getShopBySlug: function (slug) {
            promise = $http
                .get('http://localhost:3000/getShopBySlug/' + slug)
                .then(response => response.data);
            return promise;
        },
        removeTables: function () {
            promise = $http
                .get('http://localhost:3000/removeTables')
                .then(response => response.data);
            return promise;
        },
        createTables: function () {
            promise = $http
                .get('http://localhost:3000/createTables')
                .then(response => response.data);
            return promise;
        },
        createTablesData: function () {
            promise = $http
                .get('http://localhost:3000/createTablesData')
                .then(response => response.data);
            return promise;
        },
        insertCSVtoDB: function (filename) {
            promise = $http
                .get('http://localhost:3000/insertCSVtoDB/' + filename)
                .then(response => response.data);
            return promise;
        }
    }
});
