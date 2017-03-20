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