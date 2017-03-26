"use strict";

SO.controller('productListByShopController',
    [ '$scope', 'dataFactory', '$state',
        function ($scope, dataFactory, $state) {
            dataFactory.getShopBySlug($state.params.shopSlug)
                .then(function (data) {
                    $scope.shop = data;

                dataFactory.getProductsByShopId($scope.shop.id)
                    .then(function (data) {
                        $scope.productList = data;
                })
            })
        }
    ]
);