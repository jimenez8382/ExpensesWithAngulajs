appControllers.controller('reportController', function ($scope, webApiServices) {
    var rpt = this;
    rpt.Expenses = {

    };
    $scope.FiscalYear = 0;
    $scope.getExpenses = function () {
        webApiServices.getPaginated('/api/Report', { params: { FiscalYear: $scope.FiscalYear } }).then(function (data) {
            rpt.Expenses = data;
        });
    }
    $scope.getExpenses();
});