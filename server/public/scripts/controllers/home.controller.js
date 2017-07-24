myApp.controller('HomeController', ['$http', function($http) {
  console.log("Home Controller Loaded");
  var hc = this;
  hc.newUser = {};

  getUsers();
  function getUsers() {
    $http.get('/user').then(function(response) {
      //console.log(response);
      console.log(response.data);
      hc.users = response.data;
    });
  }

  hc.addUsers = function() {
    console.log('add listing', hc.newListing);
    $http.post('/user', hc.newListing)
    .then(function(response) {
      console.log('added listing', response);
      getUsers();
    });
  }
}]);
