appControllers.controller('expensesController', function ($, $rootScope,signalRSvc, $scope, webApiServices, dataGridService) {
    var exp = this;

    signalRSvc.initialize();

    // Initialize the main params.
    $scope.pageSize = 10;
    $scope.currentPage = 1;
    $scope.TotalRows = 1;
    $scope.search = " ";
    $scope.Deleted = false;
    $scope.expenseItem = {}

    //initaliate the Paginate Params
    $scope.Paginate = {
        params: {
            pageSize: $scope.pageSize,
            currentPageNumber: $scope.currentPage,
            sortExpression: "Description",
            SortDirection: "Desc",
            search: $scope.search,
        }
    };

    //Funtion to call the expenses list with paginate
    exp.getExpenses = function () {
        webApiServices.getPaginated('/api/Expenses', $scope.Paginate).then(function (data) {
            exp.PaginateConfig(data);
            exp.Expenses = data.Expenses;
        });
    }

    //Set the new paginate size and total rows after fill grid
    exp.PaginateConfig = function (data) {
        $scope.pageSize = data.PageSize;
        $scope.TotalRows = data.TotalRows;
    }

    // initialize controller with the initial configuration on my grid
    this.initializeController = function () {
        dataGridService.initializeTableHeaders();
        dataGridService.addHeader("Description", "Description");
        dataGridService.addHeader("Date", "Date");
        dataGridService.addHeader("Amount", "Amount");
        exp.tableHeaders = dataGridService.setTableHeaders();
        exp.defaultSort = dataGridService.setDefaultSort("Date");
        exp.getExpenses();

    }
    this.initializeController();

    //Function that is called when the user sort the grid
    this.changeSorting = function (column) {
        dataGridService.changeSorting(column, exp.defaultSort, exp.tableHeaders);
        exp.defaultSort = dataGridService.getSort();
        $scope.Paginate.params.SortDirection = exp.sortDirection = dataGridService.getSortDirection();
        $scope.Paginate.params.sortExpression = exp.sortExpression = dataGridService.getSortExpression();
        exp.getExpenses();
    };



    //function that return the sort expresion and sort direction.
    this.setSortIndicator = function (column) {
        return dataGridService.setSortIndicator(column, exp.defaultSort);
    };

    //This clese he modal that let us confirm the Delete operation.
    $scope.CloseAlert = function (value) {
        $rootScope.message.show = false;
    };

    //This Let us set the Item which we want to delete.
    $scope.ConfirmDelte = function (expenseItem) {
        $scope.expenseItem = expenseItem;
    };

    //Function that is executed when the user click in "Yes" when the system ask if really we want to delete the record.
    $scope.delete = function (expenseItem) {
        // edit?
        if (expenseItem.Id > 0) {
            webApiServices.delete('/api/Expenses/' + expenseItem.Id).then(// success
            function (d) {
                // Find and remove item from an array
                var i = exp.Expenses.indexOf(expenseItem);
                if (i != -1) {
                    $scope.display = 'block';
                    exp.Expenses.splice(i, 1);
                }

            },// error
            function (error) { });

        }
    }

    // Load info with the new page
    $scope.refreshPaging = function (page) {
        $scope.Paginate.params.currentPageNumber = page;
        exp.getExpenses();
    };

    //Function that refresh the inf in the grid when the user change the rows per page or when they searh info.
    this.refreshGridbyPagingsize = function (pageSize) {
        $scope.Paginate.params.pageSize = pageSize;
        $scope.Paginate.params.currentPageNumber = 1; //move at the firts page.
        exp.getExpenses();
    };

    //Function that refresh the inf in the grid when the user change the rows per page or when they searh info.
    this.refreshGridbySearching = function (search) {
        $scope.Paginate.params.search = search;
        $scope.search = search;
        exp.getExpenses();
    };
    $scope.$on("reloadGrid", function (e) {
        $scope.$apply(function () {
            exp.getExpenses();
        });
    });
});