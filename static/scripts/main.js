console.info('Go Gonzaga G.O.N.Z.A.G.A!');

var app = angular.module('weddingApp', []);

app.controller('weddingCtrl', function ($scope) {
    $scope.section;
});

app.directive('section', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            console.log(document.body.offsetHeight);
            var section = attrs.section;

            elem.on('click', function(evt) {
                evt.cancelBubble = true;
                scope.$apply(function() {
                    scope.section = section;
                });
            });

            scope.$watch(function(scope) {
                var selected = 'selected';
                if (scope.section === section) {
                    elem.addClass(selected);
                    //elem.scrollTop = 0;
                } else {
                    elem.removeClass(selected);
                }
            });
        }
    }
});