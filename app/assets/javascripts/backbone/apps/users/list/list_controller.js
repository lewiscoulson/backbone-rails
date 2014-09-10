Demo.module("UsersApp.List", function(List, APP, Backbone, Marionette, $, _){
  List.Controller = {
    listUsers: function() {
      var users = APP.request('user:entities');
    }
  };
});