appDirectives.directive("observeRecordChanged", function ($animate, $window, $timeout) {
    return {
        restrict: 'A',
        link: function ($scope, elem, attrs) {
            if (attrs.class == "isEdited")
            {
                setTimeout(function () {
                    $(".isEdited").addClass("ItemChanged").delay(2000).queue(function () {
                        $(".isEdited").removeClass("ItemChanged").dequeue();
                        $(".isEdited").removeClass("isEdited");
                    });
                }, 1);

            }
        }
    }
});