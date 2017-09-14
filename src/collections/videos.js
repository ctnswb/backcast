var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(query) {
    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'GET',
      data: {
        q: query,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        part: 'snippet',
        type: 'video',
        videoEmbeddable: true
      },
      complete: (function(data) {
        this.parse(data.responseJSON);
      }).bind(this)
    });
  },

  parse: function(response) {
    this.set(response.items);
    this.trigger('searching', this);
    return response.items;
  }

});
