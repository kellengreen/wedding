console.info('Go Gonzaga G.O.N.Z.A.G.A!');

var app = angular.module('weddingApp', []);

app.controller('weddingCtrl', function ($scope) {
    $scope.section;
});

app.directive('section', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            var section = attrs.section;

            elem.on('click', function(evt) {
                evt.cancelBubble = true;
                scope.$apply(function() {
                    scope.section = section;
                });
            });

            if (section) {
                scope.$watch(function(scope) {
                    var style = 'selected';
                    if (scope.section === section) {
                        elem.addClass(style);
                    } else {
                        elem.removeClass(style);
                    }
                });
            }
        }
    }
});
