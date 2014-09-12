APP.module("AboutApp", function(AboutApp, APP, Backbone, Marionette, $, _){
  AboutApp.Router = Backbone.Marionette.AppRouter.extend({
  	appRoutes: {
	    "about": "listAbout"
	  }
  });

  var API = {
  	listAbout: function() {
  		AboutApp.List.Controller.listAbout();
  	}
  };

  APP.addInitializer(function(){
	  new AboutApp.Router({
	  	controller: API
	  });
	});
});