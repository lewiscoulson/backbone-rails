APP.module("HeaderApp", function(HeaderApp, APP, Backbone, Marionette, $, _){
  this.startWithParent = false;

  var API = {
    listHeaders: function(){
      HeaderApp.List.Controller.listHeaders();
    }
  };

  HeaderApp.on('start', function(){
    API.listHeaders();
  });
});