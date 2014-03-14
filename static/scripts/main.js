console.info('G.O.N.Z.A.G.A!');

var app = angular.module('weddingApp', ['ngRoute']);

//app.config(function($routeProvider, $locationProvider) {
//
//    $routeProvider.when('/about', {
//        controller: 'weddingCtrl'
//    });
//
//    $locationProvider.html5Mode(false);
//
//});

app.controller('weddingCtrl', function ($scope) {

    $scope.viewstate;

    $scope.viewChange = function(state) {
        if ($scope.viewState === state) {
            $scope.viewState = undefined;
            window.location.hash = '';
        } else {
            $scope.viewState = state;
            window.location.hash = '#/' + state;
        }
    }
});