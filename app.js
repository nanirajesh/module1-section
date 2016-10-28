(function(){
  angular.module('LunchCheck',[]).
  controller('LunchCheckController',  function LunchCheckControllerfunc($scope){
        $scope.message="";
        $scope.itemcount=0;
        $scope.items="";
        $scope.color="";
        $scope.updatenumberofitems=function(){
             $scope.message="hello";
             $scope.itemcount=$scope.items.split(",").length;
             $scope.itemcount=$scope.itemcount-1;
             if($scope.items===""&&$scope.itemcount==0)
             {
               $scope.message="Please enter data first";

             }
             else if($scope.itemcount<3)
             {
               $scope.color="green";
               $scope.message="Enjoy!";
             }
             else {
               $scope.color="red";
               $scope.message="Too much!";
             }
        }
    });
  //LunchCheckControllerfunc.$injector='$scope';

})();
