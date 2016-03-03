/**
 * Widget Header Directive
 */

angular
    .module('CDash')
    .directive('cdWidgetHeader', cdWidgetHeader);

function cdWidgetHeader() {
    var directive = {
        requires: '^cdWidget',
        scope: {
            title: '@',
            icon: '@'
        },
        transclude: true,
        template: '<div class="widget-header"><div class="row"><div class="pull-left"><i class="fa" ng-class="icon"></i> {{title}} </div><div class="pull-right col-xs-6 col-sm-4" ng-transclude></div></div></div>',
        restrict: 'E'
    };
    return directive;
};
