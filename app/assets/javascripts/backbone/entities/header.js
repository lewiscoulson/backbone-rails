Demo.module("Entities", function(Entities, APP, Backbone, Marionette, $, _){
  Entities.Header = Entities.Model.extend({

  });

  Entities.HeaderCollection = Entities.Collection.extend({
    model: Entities.Header
  });

  var API = {
    getHeaders: function() {
      return new Entities.HeaderCollection([
        {name: 'users'},
        {name: 'leads'},
        {name: 'appointments'}
      ]);
    }
  };

  APP.reqres.setHandler('header:entities', function() {
    return API.getHeaders();
  });
});