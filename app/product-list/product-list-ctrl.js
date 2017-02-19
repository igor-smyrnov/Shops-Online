"use strict";

SO.controller('productListController',
    function ($scope, $http) {
        $http.get('server/products.json')
            .then(function(res){
                $scope.productList = res.data;
            });
    }
);