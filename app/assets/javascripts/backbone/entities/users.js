Demo.module("Entities", function(Entities, APP, Backbone, Marionette, $, _){
  Entities.User = Entities.Model.extend({

  });

  Entities.UsersCollection = Entities.Collection.extend({
    model: Entities.User,
    url: 'users'
  });

  var API = {
    getUserEntities: function() {
      var users = new Entities.UsersCollection();
      users.fetch();
      return users;
    }
  };

  APP.reqres.setHandler('user:entities', function() {
    return API.getUserEntities();
  });
});