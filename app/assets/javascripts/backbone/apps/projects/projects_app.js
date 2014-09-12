APP.module("ProjectsApp", function(ProjectsApp, APP, Backbone, Marionette, $, _){
  ProjectsApp.Router = Backbone.Marionette.AppRouter.extend({
  	appRoutes: {
	    "projects": "showProjects",
      "projects/:id": "showProject"
	  }
  });

  var API = {
  	showProjects: function() {
  		ProjectsApp.Show.Controller.showProjects();
  	},
    showProject: function(id) {
      ProjectsApp.Show.Controller.showProject(id);
    }
  };

  APP.addInitializer(function(){
	  new ProjectsApp.Router({
	  	controller: API
	  });
	});
});