Demo.module("UsersApp.List", function(List, APP, Backbone, Marionette, $, _){
  function getLayoutView() {
    return new List.Layout();
  }

  function showPanel(users, layout) {
    var panelView = getPanelView(users);
    layout.panelRegion.show(panelView);
  }

  function showUsers(users, layout) {
    var usersView = getUsersView(users);
    layout.usersRegion.show(usersView);
  }

  function getUsersView(users) {
    return new List.Users({
      collection: users
    });
  }

  function getPanelView(users) {
    return new List.Panel({
      collection: users
    });
  }

  function getLayoutView() {
    return new List.Layout();
  }

  List.Controller = {
    listUsers: function() {
      APP.request('user:entities', function(users) {
        var layout = getLayoutView();

        layout.on('show', function() {
          showPanel(users, layout);
          showUsers(users, layout);
        });

        APP.mainRegion.show(layout);
      });
    }
  };
});