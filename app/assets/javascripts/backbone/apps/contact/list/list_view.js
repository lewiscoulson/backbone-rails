APP.module("ContactApp.List", function(List, APP, Backbone, Marionette, $, _){
  List.Contact = Backbone.Marionette.ItemView.extend({
    template: '#list-contact-template'
  });
});