"use strict";

SO.factory('dataFactory', function ($http) {
    let promise;

    return {
        getProducts: function () {
            promise = $http.get('http://localhost:3000/getProducts')
                .then(response => response.data);
            return promise;
        },

        getProductBySlug: function (slug) {
            promise = $http.get('http://localhost:3000/getProductBySlug/' + slug)
                .then(response => response.data);
            return promise;
        }
    }
});
