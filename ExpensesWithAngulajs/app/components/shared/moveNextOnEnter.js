appDirectives.directive("moveNextOnEnter", function () {
    return {
        restrict: 'A',
        link: function ($scope, elem, attrs) {

            elem.bind('keydown', function (e) {
                var code = e.keyCode || e.which;
                if (code === 13) {
                    if (attrs.tabindex != undefined) {
                        var currentTabIndex = attrs.tabindex;
                        var nextTabIndex = parseInt(attrs.tabindex) + 1;
                        $("[tabindex=" + nextTabIndex + "]").focus();
                    }

                }
            });
        }
    }
});