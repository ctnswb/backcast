var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    this.videos = new Videos([{
      etag: '',
      id: {
        videoId: ''
      },
      snippet: {
        title: '',
        description: '',
        thumbnails: {
          default: {
            url: '',
          }
        }
      }
    }]);
    this.videos.search('pizza dough');
    this.videoListView = new VideoListView({collection: this.videos}).render();
    this.searchView = new SearchView({collection: this.videos});
    this.videoPlayerView = new VideoPlayerView({collection: this.videos});
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
