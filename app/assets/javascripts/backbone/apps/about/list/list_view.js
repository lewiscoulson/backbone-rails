APP.module("AboutApp.List", function(List, APP, Backbone, Marionette, $, _){
  List.About = Backbone.Marionette.ItemView.extend({
    template: '#list-about-template'
  });
});