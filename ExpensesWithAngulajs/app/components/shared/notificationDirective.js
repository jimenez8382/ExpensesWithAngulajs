
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
        controller: function ($scope, $rootScope, $timeout) {

            $rootScope.message = {
                success: "success",
                show: false,
                text: "",
                title: ""
            };
            $scope.$watch('message.show', function (newValue, oldValue) {
                if (newValue == true) {
                    $(".alert").fadeIn(500);
                    $(".alert").delay(1000).slideUp(500, function () {
                        $rootScope.message.show = false;
                    });
                } else {
                    $rootScope.message.show = false;
                }
               
            });
        },
    }
});
