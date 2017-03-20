/* Application */
var app = angular.module('appAngularExpenses', ['ngRoute', 'bw.paging', 'blockUI', 'ui.materialize', 'appControllers', 'appApiServices', 'appDirectives', 'appDataGridService', 'ngLocationUpdate']);
app.config([
    '$compileProvider',
    function ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|chrome-extension):/);
        //check browser support
    }
]);

/* Controllers */
var appControllers = angular.module('appControllers', []);

/* Services */
var appApiServices = angular.module('appApiServices', []);
var appDataGridService = angular.module('appDataGridService', []);

/* Filters */
var appFilters = angular.module('appFilters', []);

/* Directives */
var appDirectives = angular.module('appDirectives', []);

// For jQuery
app.value('$', $);