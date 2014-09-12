Demo.module("Entities", function(Entities, APP, Backbone, Marionette, $, _){
  Entities.User = Entities.Model.extend({

  });

  Entities.UsersCollection = Entities.Collection.extend({
    model: Entities.User,
    url: 'users'
  });

  var API = {
    getUserEntities: function(cb) {
      var users = new Entities.UsersCollection();
      users.fetch({
        success: function() {
          cb(users);
        }
      });
      return users;
    }
  };

  APP.reqres.setHandler('user:entities',  function(cb) {
    API.getUserEntities(cb);
  });
});