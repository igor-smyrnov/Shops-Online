"use strict";

SO.controller('adminPanelController',
    [ '$scope', 'dataFactory',
        function ($scope, dataFactory) {

            $scope.csvName = 'Products';

            $scope.removeTables = function () {
                dataFactory.removeTables().then(function (data) {
                    $scope.answer = data;
                })
            };

            $scope.createTables = function () {
                dataFactory.createTables().then(function (data) {
                    $scope.answer = data;
                })
            };

            $scope.createTablesData = function () {
                dataFactory.createTablesData().then(function (data) {
                    $scope.answer = data;
                })
            };

            $scope.insertCSVtoDB = function () {
                dataFactory.insertCSVtoDB($scope.csvName).then(function (data) {
                    $scope.answer = data;
                })
            };
        }
    ]
);