"use strict";

SO.controller('shopSingleController',
    [ '$scope', '$state', 'dataFactory',
        function ($scope, $state, dataFactory) {
            dataFactory.getShopById($state.params.id)
                .then(function (data) {
                    $scope.shop = data;
                })
        }
    ]
);