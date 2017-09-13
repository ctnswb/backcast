var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function() {
    this.render(this.collection.at(0));
    this.collection.on('select',
      (function(video) {
        this.render(video);
      }).bind(this));
  },

  render: function(video) {
    this.$el.html(this.template(video.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
