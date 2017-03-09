"use strict";

let SO = angular.module('Shops_online', ['ui.router', 'ngCookies']);

SO.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/product-list/product-list-view.html',
                controller: 'productListController'
            })
            .state('byShop', {
                url: '/:shopSlug/products',
                templateUrl: 'app/product-list/product-list-view.html',
                controller: 'productListByShopController'
            })
            .state('product', {
                url: '/products/:slug',
                templateUrl: 'app/product-single/product-single-view.html',
                controller: 'productSingleController'
            })
            .state('shop', {
                url: '/shops/:slug',
                templateUrl: 'app/shop-single/shop-single-view.html',
                controller: 'shopSingleController'
            })
            .state('admin', {
                url: '/admin-panel',
                templateUrl: 'app/admin-panel/admin-panel-view.html',
                controller: 'adminPanelController'
            })
}]);

SO.controller('headerController',
    [ '$scope', 'dataFactory', '$cookies',
        function ($scope, dataFactory, $cookies) {
            $scope.cart = 0;

            $scope.$watch(function(){
                return $cookies.get('cart');
            }, function(data){
                $scope.cart = parseFloat(data);
            });

            dataFactory.getShops().then(function (data) {
                $scope.ShopsList = data;
            })
        }
    ]
);