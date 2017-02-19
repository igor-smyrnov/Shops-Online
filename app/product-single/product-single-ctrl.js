"use strict";

SO.controller('productSingleController',
    [ '$scope', '$http', '$state', '$filter',
        function ($scope, $http, $state, $filter) {
            $http.get('server/products.json')
            .then(function(res){
                $scope.product = $filter('filter')(res.data,
                    {id:$state.params.id})[0];
            });
        }
    ]
);