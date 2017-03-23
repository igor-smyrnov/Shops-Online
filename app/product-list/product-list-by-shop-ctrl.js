"use strict";

SO.controller('productListByShopController',
    [ '$scope', 'dataFactory', '$state',
        function ($scope, dataFactory, $state) {
            dataFactory.getProductsByShopId($state.params.shopId).then(function (data) {
                $scope.productList = data;
            })
        }
    ]
);