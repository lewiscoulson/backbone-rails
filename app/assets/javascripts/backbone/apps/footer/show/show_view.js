APP.module("FooterApp.Show", function(Show, APP, Backbone, Marionette, $, _){
  Show.Footer = Backbone.Marionette.ItemView.extend({
    template: '#footer-show-template',
    id: 'footer'
  });
});