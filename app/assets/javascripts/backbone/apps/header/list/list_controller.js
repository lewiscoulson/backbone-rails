Demo.module("HeaderApp.List", function(List, APP, Backbone, Marionette, $, _){
  function getHeaderView(links) {
    return new List.Headers({
      collection: links
    });
  }

  List.Controller = {
    listHeaders: function() {
      var links = APP.reqres.request('header:entities');
      var headersview = getHeaderView(links);
      APP.headerRegion.show(headersview);
    }
  };
});