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
    'click .btn': 'search',
    'keyup': 'keypressed'
  },

  search: function(e) {
    this.collection.search(this.$el.find('input').val());
  },

  keypressed: function(e) {
    if (e.which === 13) {
      this.search();
    }
  },

  template: templateURL('src/templates/search.html')

});
