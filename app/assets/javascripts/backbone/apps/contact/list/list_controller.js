APP.module("ContactApp.List", function(List, APP, Backbone, Marionette, $, _){
  function getContactView() {
    return new List.Contact();
  }

  List.Controller = {
    listContact: function() {
      var contactView = getContactView();
      APP.mainRegion.show(contactView);
    }
  };
});