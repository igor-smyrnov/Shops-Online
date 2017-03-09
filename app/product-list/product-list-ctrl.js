"use strict";

SO.controller('productListController',
    [ '$scope', 'dataFactory', '$cookies',
        function ($scope, dataFactory, $cookies) {
            $scope.addToCart = function (product) {
                $cookies.put('cart', product);
            };
            dataFactory.getProducts().then(function (data) {
                $scope.productList = data;
            })
        }
    ]
);