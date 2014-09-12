APP.module("HeaderApp.List", function(List, APP, Backbone, Marionette, $, _){
  List.Header = Backbone.Marionette.ItemView.extend({
    template: '#header-template',
    tagName: 'li'
  });

  List.Headers = Backbone.Marionette.CompositeView.extend({
    template: '#headers-template',
    className: 'navbar navbar-default',
    childView: List.Header,
    childViewContainer: 'ul'
  });
});