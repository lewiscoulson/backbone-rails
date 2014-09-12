APP.module("ProjectsApp.Show", function(Show, APP, Backbone, Marionette, $, _){
  function getLayoutView() {
    return new Show.Layout();
  }

  function getProjectView(project) {
    return new Show.ProjectDetailView({
      model: project
    });
  }

  function showPanel(projects, layout) {
    var panelView = getPanelView(projects);
    layout.panelRegion.show(panelView);
  }

  function getPanelView(projects) {
    return new Show.Panel({
      collection: projects
    });
  }

  function showProjects(projects, layout) {
    var projectsView = getProjectsView(projects);
    layout.projectsRegion.show(projectsView);
  }

  function getProjectsView(projects) {
    return new Show.Projects({
      collection: projects
    });
  }

  function getLayoutView() {
    return new Show.Layout();
  }

  Show.Controller = {
    showProjects: function() {
      APP.request('project:entities', function(projects) {
        var layout_view = getLayoutView();

        layout_view.on('show', function() {
          showPanel(projects, layout_view);
          showProjects(projects, layout_view);
        });

        APP.mainRegion.show(layout_view);
      });
    },
    showProject: function(id) {
      var project = APP.request('project:entity', id);
      var project_view = getProjectView(project);

      APP.mainRegion.show(project_view);
    }
  };
});
