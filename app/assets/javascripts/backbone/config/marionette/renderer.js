Backbone.Marionette.Renderer.render = function(template, data) {
  path = JST['backbone/apps' + template];
  path(data);
};