"use strict";

var SO = angular.module('Shops_online', ["ui.router"]);

SO.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/product-list/product-list-view.html',
                controller: 'productListController'
            })
            .state('products', {
                url: '/products/:id',
                templateUrl: 'app/product-single/product-single-view.html',
                controller: 'productSingleController'
            })

}]);