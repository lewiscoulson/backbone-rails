APP.module("ContactApp", function(ContactApp, APP, Backbone, Marionette, $, _){
  ContactApp.Router = Backbone.Marionette.AppRouter.extend({
  	appRoutes: {
	    "contact": "listContact"
	  }
  });

  var API = {
  	listContact: function() {
  		ContactApp.List.Controller.listContact();
  	}
  };

  APP.addInitializer(function(){
	  new ContactApp.Router({
	  	controller: API
	  });
	});
});