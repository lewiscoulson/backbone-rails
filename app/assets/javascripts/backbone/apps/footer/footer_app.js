Demo.module("FooterApp", function(FooterApp, APP, Backbone, Marionette, $, _){
  this.startWithParent = false;

  var API = {
    showFooter: function(){
      FooterApp.Show.Controller.showFooter();
    }
  };

  FooterApp.on('start', function(){
    API.showFooter();
  });
});