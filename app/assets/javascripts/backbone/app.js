(function() {
  this.Demo = (function(Backbone, Marionette){
    var APP = new Marionette.Application();

    APP.addRegions({
      headerRegion: '#header-region',
      mainRegion: '#main-region',
      footerRegion: '#footer-region'
    });

    APP.addInitializer(function(){
      APP.module('HeaderApp').start();
      APP.module('FooterApp').start();
    });

    APP.on("initialize:after", function(){
      if (Backbone.history) {
        Backbone.history.start();
      }
    });

    return APP;
  }(Backbone, Marionette));
}).call(this);