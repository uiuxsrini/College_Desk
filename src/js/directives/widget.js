/**
 * Widget Directive
 */

angular
    .module('CDash')
    .directive('cdWidget', cdWidget);

function cdWidget() {
    var directive = {
        transclude: true,
        template: '<div class="widget" ng-transclude></div>',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
        /* */
    }
};
