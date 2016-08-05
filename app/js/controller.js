app.controller('mainController', ["$scope", "mainService", function($scope, mainService) {

  var redditData;

  mainService.getRedditCatsJson()
    .then(function(res){
      redditData = res.data.data.children;
      console.log(redditData);
    })
    .finally(function () {
      $scope.chooseKitty();

    });

    $scope.chooseKitty = function functionName() {

      var randomNumber = function() {
        return Math.floor(Math.random() * redditData.length) ;
      }
      console.log(randomNumber(), redditData[randomNumber()].data.url.indexOf('.jpg'))

      if(redditData[randomNumber()].data.url.indexOf('.jpg')) {
        $scope.randomKittyUrl = redditData[randomNumber()].data.url;
      } else {
        $scope.chooseKitty();
      }

    }



}])
