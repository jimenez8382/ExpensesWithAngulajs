appApiServices.service('webApiServices',['$http','blockUI','$rootScope', function ($http, blockUI, $rootScope) {
    // Services should return the promise rather than the data. This is the asynchronous way.
    return {
        get: function (resourceUrl) {
            // Block the user interface
            blockUI.start('Loading ...');
            return $http.get(resourceUrl).then(function (response) {
                blockUI.stop();
                return response.data;
            }).catch(function (response) {
                console.error('Expenses error', response.status, response.data);
                $rootScope.message = {
                    success: "danger",
                    show: true,
                    text: response.data.Message,
                    title: response.data.ExceptionMessage,
                };
                blockUI.stop();
            }).finally(function () { });
        },

        //get all without filter
        getAll: function (resourceUrl) {
            blockUI.start('Loading ...');
            return $http.get(resourceUrl).then(function (response) { return response.data; }).catch(function (response) {
                console.error('Expenses error', response.status, response.data);
                $rootScope.message = {
                    success: "danger",
                    show: true,
                    text: response.data.Message,
                    title: response.data.ExceptionMessage,
                };
                blockUI.stop();
            }).finally(function () { });
        },

        //Get the record by paging
        getPaginated: function (resourceUrl, Params) {
            blockUI.start('Loading ...');
            return $http.get(resourceUrl, Params).then(function (response) {
                blockUI.stop();
                return response.data;
            }).catch(function (response) {
                console.error('Expenses error', response.status, response.data);
                $rootScope.message = {
                    success: "danger",
                    show: true,
                    text: response.data.Message,
                    title: response.data.ExceptionMessage,
                };
                blockUI.stop();
            }).finally(function () { });
        },

        //Add new record
        add: function (resourceUrl, model) {
            blockUI.start('Saving ...');
            return $http.post(resourceUrl, model).then(function (response) {
                blockUI.stop();
                $rootScope.message = {
                    success: "success",
                    show: true,
                    text: "The record was added succesfully",
                    title: "Add",
                };
                return response.data;
            }).catch(function (response) {
                console.error('Expenses error', response.status, response.data);
                $rootScope.message = {
                    success: "danger",
                    show: true,
                    text: response.data.Message,
                    title: response.data.ExceptionMessage,
                };
                blockUI.stop();
            }).finally(function () { });
        },


        //Update the record given
        update: function (resourceUrl, model) {
            blockUI.start('Updating ...');
            return $http.put(resourceUrl, model).then(function (response) {
                blockUI.stop();
                $rootScope.message = {
                    success: "success",
                    show: true,
                    text: "The record was updated succesfully",
                    title: "Update",
                };
                return response.data;
            }).catch(function (response) {
                console.error('Expenses error', response.status, response.data);
                $rootScope.message = {
                    success: "danger",
                    show: true,
                    text: response.data.Message,
                    title: response.data.ExceptionMessage,
                };
                blockUI.stop();
            }).finally(function () { });
        },


        //Delete the record given
        delete: function (resourceUrl) {
            blockUI.start("Deleting...");
            return $http.delete(resourceUrl).then(function (response) {
                blockUI.stop();
                $rootScope.message = {
                    success: "success",
                    show: true,
                    text: "The record was deleted succesfully",
                    title: "Delete",
                };

                return response.data;
            }).catch(function (response) {
                console.error('Expenses error', response.status, response.data);
                $rootScope.message = {
                    success: "danger",
                    show: true,
                    text: response.data.Message,
                    title: response.data.ExceptionMessage,
                };
                blockUI.stop();
            }).finally(function () { });
        },
    }

}]);