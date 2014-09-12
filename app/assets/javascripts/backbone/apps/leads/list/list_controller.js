Demo.module("LeadsApp.List", function(List, APP, Backbone, Marionette, $, _){
  function getLeadsView() {
    return new List.Leads();
  }

  List.Controller = {
    listLeads: function() {
      var leadsView = getLeadsView();
      APP.mainRegion.show(leadsView);
    }
  };
});