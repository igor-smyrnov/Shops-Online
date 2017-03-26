"use strict";

SO.controller('productSingleController',
    [ '$scope', '$state', 'dataFactory',
        function ($scope, $state, dataFactory) {
            dataFactory.getProductBySlug($state.params.slug)
                .then(function (data) {
                    $scope.product = data;
                })
        }
    ]
);