"use strict";

let SO = angular.module('Shops_online', ["ui.router"]);

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
                url: '/products/:slug',
                templateUrl: 'app/product-single/product-single-view.html',
                controller: 'productSingleController'
            })
            .state('admin', {
                url: '/admin-panel',
                templateUrl: 'app/admin-panel/admin-panel-view.html'
            })

}]);