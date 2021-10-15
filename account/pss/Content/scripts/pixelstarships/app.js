var pixelstarshipsApp = angular.module('PixelStarshipsApp', []);

pixelstarshipsApp.controller('subscriptionController', ['$scope', '$http', function ($scope, $http) {

    $scope.emailAddress = "";

    
    $scope.subscribe = function () {
                
        /*
        var data = $.param({
            json: JSON.stringify({
                emailAddress: $scope.emailAddress
            })
        }); */
        /*
        $http.post("/subscribe", data).success(function (data, status) {
            //$scope.status = data;
            $scope.status = 'You have subscribed to Pixel Starships successfully.';
        }).error(function(error)
        {
            //$scope.status = error.message;
            $scope.status = "You already subscribed to Pixel Starships.";
        }); */

        $http.post('subscribe', { emailAddress: $scope.emailAddress })
        .success(function (data, status, headers, config) {
            //alert(data.statusText);
            // some code here
            $scope.status = data.message;            
            //alert(data.message);
        })
        .catch(function (data, status, headers, config) { // <--- catch instead error
            //alert(data.statusText);
            //data.statusText; //contains the error message
            $scope.status = "An error occured.";
            

        });

    };

    
}]);
