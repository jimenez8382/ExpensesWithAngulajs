appApiServices.service('signalRSvc', function ($, $rootScope) {
        var proxy = null;
        var initialize = function () {
            //Getting the connection object
            connection = $.hubConnection();

            //Creating proxy
            this.proxy = connection.createHubProxy('ExpensesHub');

            //Starting connection
            connection.start();

            //Publishing an event when server pushes a greeting message
            this.proxy.on('gridUpdated', function () {
                $rootScope.$broadcast("reloadGrid");
            });
        };

        var sendRequest = function () {
            //Invoking greetAll method defined in hub
            this.proxy.invoke('UpdateGrid');
        };

        return {
            initialize: initialize,
            sendRequest: sendRequest
        };
    });