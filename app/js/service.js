app.service('mainService', ['$http', function ($http) {

  this.getRedditCatsJson = function () {
    return $http.get('https://www.reddit.com/r/cats.json');
  };

}])
