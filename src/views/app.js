var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    this.videos = new Videos(window.exampleVideoData);
    this.videoListView = new VideoListView({collection: this.videos}).render();
    this.searchView = new SearchView();
    this.videoPlayerView = new VideoPlayerView({collection: this.videos});
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
