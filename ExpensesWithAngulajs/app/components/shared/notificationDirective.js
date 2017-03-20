
/// <reference path="modalDialog.html" />
appDirectives.directive('notification', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/components/shared/notification.html',
        scope: {
            message: "=alert",
            callbackbuttonclose: '&ngClickCloseButton'
        },
        transclude: true,
        controller: function ($scope, $rootScope) {

            $rootScope.message = {
                success: "success",
                show: false,
                text: "",
                title: ""
            };

            //$scope.CloseAlert = function (value) {
            //    $scope[value] = false;

            //};
        },
    }
});
