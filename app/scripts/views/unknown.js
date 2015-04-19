define([
  'backbone',
  'hbs!templates/404'
], function (Backbone, unknownTpl, $) {

  var UnknownView = Backbone.View.extend({
    tagName: "div",
    className: ".content",
    events: {},
    initialize: function() {
      this.render();
    },
    render: function() {
      Backbone.$(this.className).html(unknownTpl());
      return this;
    }
  });

  return UnknownView;
});
