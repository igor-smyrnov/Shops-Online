"use strict";

SO.controller('productListController',
    [ '$scope', '$http', 'dataFactory',
        function ($scope, $http, dataFactory) {
            $http.get('server/products.json')
                .then(function(res){
                    $scope.productList = res.data;
                });
            dataFactory.getProducts().then(function (data) {
                return $scope.serverData = data;
            })
        }
    ]
);