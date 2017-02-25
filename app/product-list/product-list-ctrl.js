"use strict";

SO.controller('productListController',
    [ '$scope', 'dataFactory',
        function ($scope, dataFactory) {
            dataFactory.getProducts().then(function (data) {
                return $scope.productList = data;
            })
        }
    ]
);