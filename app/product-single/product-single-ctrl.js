"use strict";

SO.controller('productSingleController',
    [ '$scope', '$state', 'dataFactory',
        function ($scope, $state, dataFactory) {
            dataFactory.getProductById($state.params.id)
                .then(function (data) {
                    $scope.product = data;
                })
        }
    ]
);