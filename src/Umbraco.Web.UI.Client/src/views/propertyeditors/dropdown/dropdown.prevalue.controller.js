angular.module("umbraco").controller("Umbraco.Editors.DropdownPreValueController",
    function ($scope, $timeout) {
       
        $scope.newItem = "";
        $scope.hasError = false;
       
        if (!angular.isArray($scope.model.value)) {
            //make an array from the dictionary
            var items = [];
            for (var i in $scope.model.value) {
                items.push($scope.model.value[i]);
            }
            //now make the editor model the array
            $scope.model.value = items;
        }

        $scope.remove = function(item, evt) {

            evt.preventDefault();

            $scope.model.value = _.reject($scope.model.value, function (i) {
                return i === item;
            });
            
        };

        $scope.add = function (evt) {
            
            evt.preventDefault();
            
            if (!_.contains($scope.model.value, $scope.newItem)) {
                if ($scope.newItem) {
                    $scope.model.value.push($scope.newItem);
                    $scope.newItem = "";
                    $scope.hasError = false;
                    return;
                }
            }

            //there was an error, do the highlight (will be set back by the directive)
            $scope.hasError = true;            
        };

    });