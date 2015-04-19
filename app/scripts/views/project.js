define([
  'backbone',
  'models/Project',
  'hbs!templates/project'
], function (Backbone, Project, projectTpl) {

  var ProjectView = Backbone.View.extend({
    className: "",
    events: {},
    initialize: function() {
      this.render();
    },
    render: function() {
      var _this = this;

      // etat 1 : load
      setTimeout(function() {
        // etat 2: apparition
        Backbone.$('.project').addClass('hidden');
        Backbone.$(_this.className).removeClass('hidden');
        Backbone.$(_this.className).html(projectTpl(_this.model));

        // etat 3: agrandissement
        setTimeout(function() {
          Backbone.$('.home').css('display', 'none');
        }, 1500);
      }, 1500)
      return this;
    }
  });

  return ProjectView;
});
