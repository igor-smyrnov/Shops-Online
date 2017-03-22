"use strict";

SO.controller('productListByShopController',
    [ '$scope', 'dataFactory', '$state',
        function ($scope, dataFactory, $state) {
            dataFactory.getShopById($state.params.shopId).then(function (data) {
                $scope.shop = data;

                dataFactory.getProductsByShopId($scope.shop.id).then(function (data) {
                    $scope.productList = data;
                })
            });
        }
    ]
);