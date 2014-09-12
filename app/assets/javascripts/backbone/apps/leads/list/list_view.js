Demo.module("LeadsApp.List", function(List, APP, Backbone, Marionette, $, _){
  List.Leads = Backbone.Marionette.ItemView.extend({
    template: '#list-leads-template'
  });
});