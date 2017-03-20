/// <reference path="components/expenses/expenses.html" />
/// <reference path="components/expenses/expenses.html" />
app.config(function ($routeProvider, $locationProvider) {
    // use the HTML5 History API & set HTM5 mode true
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/expenses',
        {
            controller: 'expensesController',
            controllerAs: 'expenses',
            templateUrl: 'app/components/expenses/expenses.html'
        })
        .when('/expense/add',
        {
            controller: 'expenseFormController',
            controllerAs: 'expensesForm',
            templateUrl: 'app/components/expenses/expensesForm.html'
        })
        .when('/expense/:expenseId',
        {
            controller: 'expenseFormController',
            controllerAs: 'expenseForm',
            templateUrl: 'app/components/expenses/expensesForm.html'
        })
        .when('/report',
        {
            controller: 'reportController',
            controllerAs: 'report',
            templateUrl: 'app/components/report/report.html'
        })
        // Default
        .when('/',
        {
            redirectTo: '/expenses'
            //controller: '/expenses',
            //controllerAs: 'expenses',
            //templateUrl: 'app/components/expenses/expenses.html'
        })
        .otherwise({ redirectTo: '/expenses' });
});