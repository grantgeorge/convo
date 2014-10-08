angular.module('convoApp')
  .controller('LoginCtrl', [
    '$scope',
    '$stateParams',
    'login',
  function($scope, $stateParams, login){

    $scope.login = function() {
      login.login().success(function(comment) {
        console.log('login success');
      });
    };

  }]);
