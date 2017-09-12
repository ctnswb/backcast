var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    this.videoListView = new VideoListView({collection:this.videos}).render();
    this.searchView = new SearchView();
    this.videoPlayerView = new VideoPlayerView();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
