var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  events: {
    'click .video-list-entry-title': 'selectVideo'
  },

  selectVideo: function() {
    console.log('clicking', this.model);
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
