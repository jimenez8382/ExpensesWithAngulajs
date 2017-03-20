/// <reference path="modalDialog.html" />
appDirectives.directive('datetimepickercustom', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/components/shared/datetimePicker.html',
        scope: {
            expense: "=item",
            tabindex: "=tabindex",
        },
        transclude: true,
        controller: function ($scope) {

            $scope.opened = true;
            var currentTime = new Date();
            var days = 15;
            $scope.currentTime = currentTime;
            $scope.datetimePickerConfig = {
                currentTime: currentTime,
                month: ['Januar', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                monthShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                weekdaysFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                weekdaysLetter: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                disable: [false, 1, 7],
                today: 'Today',
                clear: 'Clear',
                close: 'Close',
                minDate: (new Date($scope.currentTime.getTime() - (1000 * 60 * 60 * 24 * days))).toISOString(),
                maxDate: (new Date($scope.currentTime.getTime() + (1000 * 60 * 60 * 24 * days))).toISOString()
            };

            $scope.onclose = function (elemt) {
                var tabindex = elemt.tabindex;
                var nextTabIndex = parseInt(tabindex) + 1;
                $("[tabindex=" + nextTabIndex + "]").focus();

            }

            $("#date_root").addClass("picker--opened");
        },
    }
});
