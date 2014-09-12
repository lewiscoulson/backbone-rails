APP.module("Entities", function(Entities, APP, Backbone, Marionette, $, _){
  var projects;

  Entities.Project = Entities.Model.extend({

  });

  Entities.ProjectsCollection = Entities.Collection.extend({
    model: Entities.Project,
    url: 'projects'
  });

  var API = {
    getProjectEntities: function(cb) {
      projects = new Entities.ProjectsCollection();
      projects.fetch({
        success: function() {
          cb(projects);
        }
      });
      return projects;
    },
    getProjectEntity: function(id) {
      return projects.get(id);
    }
  };

  APP.reqres.setHandler('project:entities', function(cb) {
    API.getProjectEntities(cb);
  });

  APP.reqres.setHandler('project:entity', function(id) {
    return API.getProjectEntity(id);
  });
});