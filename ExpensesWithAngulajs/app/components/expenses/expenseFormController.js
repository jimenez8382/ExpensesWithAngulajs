appControllers.controller('expenseFormController', function ($, $rootScope, $scope,signalRSvc, webApiServices, $routeParams, $location) {
    signalRSvc.initialize();
    //Updating greeting message after receiving a message through the event
    var exp = this;
    $scope.expense = {};
    $rootScope.successTextAlert = "";
    $rootScope.showSuccessAlert = false;
    $rootScope.type = "success";
    $scope.Mode = 'create a new expense';

    // check if is mode Edit;
    var id = $routeParams.expenseId;

    exp.getexpense = function () {
        // load the expense if already exist
        if (id > 0) {
            $scope.Mode = 'Edit the expense # ' + id;
            webApiServices.get('/api/Expenses/' + id).then(function (data) {
                $scope.expense = data;
            });
        }
    }
    exp.getexpense();
    $scope.save = function (expense) {
        // edit?
        if (expense.Id > 0) {
            webApiServices.update('/api/Expenses/' + expense.Id, expense).then(// success

            function (d) {
                signalRSvc.sendRequest();
            },// error
            function (error) { });

        } else {
            webApiServices.add('/api/Expenses/', expense).then(// success
            function (d) {
                $scope.expense.Id = d.Id;//update the Id of the Expense added
                $scope.Mode = 'Edit the expense # ' + d.Id;
                $location.update_path('/expense/' + d.Id)
                signalRSvc.sendRequest();
            },// error
            // error
            function (error) {
            });
        }
    }

    $scope.New = function () {
        $location.update_path('/expense/add');
        id = 0;
        $scope.expense.Id = 0;
        $scope.expense.Date = "";
        $scope.expense.Amount = 0;
        $scope.expense.Description = "";
        $scope.Mode = 'create a new expense';
    }

    // switch flag
    $scope.CloseAlert = function (value) {
        ////$scope[value] = !$scope[value];
        $rootScope.message.show = false;
    };
});