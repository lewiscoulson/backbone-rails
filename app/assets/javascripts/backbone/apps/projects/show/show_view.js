APP.module("ProjectsApp.Show", function(Show, APP, Backbone, Marionette, $, _){
  Show.Layout = Backbone.Marionette.LayoutView.extend({
    template: '#show-projects-layout-template',
    regions: {
      panelRegion: '#panel-region',
      projectsRegion: '#projects-region'
    }
  });

  Show.Panel = Backbone.Marionette.ItemView.extend({
    template: '#show-panel-template'
  });

  Show.Project = Backbone.Marionette.ItemView.extend({
    template: '#show-project-template'
  });

  Show.ProjectDetailView = Backbone.Marionette.ItemView.extend({
    template: '#show-project-detail-template'
  });

  Show.Projects = Backbone.Marionette.CompositeView.extend({
    template: '#show-projects-template',
    childView: Show.Project,
    childViewContainer: '.projects'
  });
});