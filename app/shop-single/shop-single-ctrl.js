"use strict";

SO.controller('shopSingleController',
    [ '$scope', '$state', 'dataFactory',
        function ($scope, $state, dataFactory) {
            dataFactory.getShopBySlug($state.params.slug)
                .then(function (data) {
                    $scope.shop = data;
                })
        }
    ]
);