var SearchView = Backbone.View.extend({

  el: '.search',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  events: {
    'click .btn': 'search'
  },

  search: function(e) {
    this.collection.search(this.$el.find('input').val());
  },

  template: templateURL('src/templates/search.html')

});
