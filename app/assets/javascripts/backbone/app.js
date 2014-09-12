(function() {
  this.APP = (function(Backbone, Marionette){
    var APP = new Marionette.Application();

    APP.routeRoute = 'projects';

    APP.addRegions({
      headerRegion: '#header-region',
      mainRegion: '#main-region',
      footerRegion: '#footer-region'
    });

    APP.addInitializer(function(){
      APP.module('HeaderApp').start();
      APP.module('FooterApp').start();
    });

    APP.on("start", function(){
      if (Backbone.history) {
        Backbone.history.start();

        APP.getCurrentRoute() == '' ? APP.navigate(APP.routeRoute, {trigger: true}) : '';
      }
    });

    APP.navigate = function(route, options) {
      Backbone.history.navigate(route, options);
    };

    APP.getCurrentRoute = function() {
      return Backbone.history.fragment;
    }

    return APP;
  }(Backbone, Marionette));
}).call(this);