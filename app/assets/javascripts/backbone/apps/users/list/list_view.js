Demo.module("UsersApp.List", function(List, APP, Backbone, Marionette, $, _){
  List.Layout = Backbone.Marionette.LayoutView.extend({
    template: '#list-layout-template',
    regions: {
      panelRegion: '#panel-region',
      usersRegion: '#users-region'
    }
  });

  List.Panel = Backbone.Marionette.ItemView.extend({
    template: '#list-panel-template'
  });

  List.User = Backbone.Marionette.ItemView.extend({
    template: '#list-user-template',
    tagName: 'tr'
  });

  List.Users = Backbone.Marionette.CompositeView.extend({
    template: '#list-users-template',
    childView: List.User,
    childViewContainer: 'tbody'
  });
});