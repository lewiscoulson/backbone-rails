APP.module("AboutApp.List", function(List, APP, Backbone, Marionette, $, _){
  function getAboutView() {
    return new List.About();
  }

  List.Controller = {
    listAbout: function() {
      var aboutView = getAboutView();
      APP.mainRegion.show(aboutView);
    }
  };
});