var VideoListEntryView = Backbone.View.extend({


  initialize: function() {
    this.model.on('change', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
