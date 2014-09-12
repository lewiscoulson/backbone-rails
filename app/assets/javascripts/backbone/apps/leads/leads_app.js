Demo.module("LeadsApp", function(LeadsApp, APP, Backbone, Marionette, $, _){
  LeadsApp.Router = Backbone.Marionette.AppRouter.extend({
  	appRoutes: {
	    "leads": "listLeads"
	  }
  });

  var API = {
  	listLeads: function() {
  		LeadsApp.List.Controller.listLeads();
  	}
  };

  APP.addInitializer(function(){
	  new LeadsApp.Router({
	  	controller: API
	  });
	});
});