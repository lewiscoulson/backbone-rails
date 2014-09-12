APP.module("FooterApp.Show", function(Show, APP, Backbone, Marionette, $, _){
  Show.Controller = {
    showFooter: function() {
      footerView = Show.Controller.getFooterView();
      APP.footerRegion.show(footerView);
    },
    getFooterView: function() {
      return new Show.Footer();
    }
  };
});