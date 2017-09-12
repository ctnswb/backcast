var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function() {
    this.collection.on('update', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    this.collection.forEach(this.renderVideo, this);
  },

  renderVideo: function(video) {
    var videoListEntryView = new VideoListEntryView({model: video});
    this.$el.children().append(videoListEntryView.$el);
  },

  template: templateURL('src/templates/videoList.html')

});
