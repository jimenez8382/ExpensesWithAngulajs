﻿appApiServices.service('signalRSvc',['$','$rootScope', function ($, $rootScope) {
        var proxy = null;
        var initialize = function () {
            //Getting the connection object
            connection = $.hubConnection();

            //Creating proxy
            this.proxy = connection.createHubProxy('ExpensesHub');

            //Starting connection
            connection.start();

            //Publishing an event when server pushes a greeting message
            this.proxy.on('gridUpdated', function (expenseId) {
                $rootScope.$broadcast("reloadGrid", { expenseId: expenseId } );
            });
        };

        var sendRequest = function (expenseId) {
            //Invoking greetAll method defined in hub
            this.proxy.invoke('UpdateGrid', expenseId);
        };

        return {
            initialize: initialize,
            sendRequest: sendRequest
        };
    }]);