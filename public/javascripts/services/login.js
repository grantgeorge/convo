angular.module('convoApp')
  .factory('login', ['$http', function($http){
    var o = {};

    o.login = function() {
      return $http.get('/login').success(function(data){
        angular.copy(data, o);
      });
    };

    return o;
  }]);
