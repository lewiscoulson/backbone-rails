Demo.module("UsersApp", function(UsersApp, APP, Backbone, Marionette, $, _){
  UsersApp.Router = Backbone.Marionette.AppRouter.extend({
  	appRoutes: {
	    "users": "listUsers"
	  }
  }); 

  var API = {
  	listUsers: function() {
  		UsersApp.List.Controller.listUsers();
  	}
  };

  APP.addInitializer(function(){
	  new UsersApp.Router({
	  	controller: API
	  });
	});
});