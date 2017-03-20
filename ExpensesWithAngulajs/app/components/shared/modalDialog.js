/// <reference path="modalDialog.html" />
appDirectives.directive('modalcustom', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/components/shared/modalDialog.html',
        scope: {
            expenseItem: "=item",
            display: "=display",
            callbackbuttonleft: '&ngClickLeftButton',
            callbackclickok: '&ngClickOkButton',
            handler: '=lolo'
        },
        transclude: true,
        controller: function ($scope) {
            $scope.handler = 'pop';
        },
    }
});
