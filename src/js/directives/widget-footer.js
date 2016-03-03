/**
 * Widget Footer Directive
 */

angular
    .module('CDash')
    .directive('cdWidgetFooter', cdWidgetFooter);

function cdWidgetFooter() {
    var directive = {
        requires: '^cdWidget',
        transclude: true,
        template: '<div class="widget-footer" ng-transclude></div>',
        restrict: 'E'
    };
    return directive;
};
