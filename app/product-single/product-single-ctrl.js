"use strict";

SO.controller('productSingleController',
    [ '$scope', '$state', 'dataFactory',
        function ($scope, $state, dataFactory) {
            dataFactory.getProductById($state.params.id)
                .then(function (data) {
                    $scope.product = data;
                    dataFactory.getShopById($scope.product.shop_id)
                        .then(function (data) {
                            $scope.shop = data;
                        })
                })
        }
    ]
);