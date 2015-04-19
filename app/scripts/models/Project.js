define(['backbone'], function (Backbone) {

  var Project = Backbone.Model.extend({
    initialize: function(options) {
      this.title = options.title || "";
      this.duration = options.duration || "";
      this.position = options.position || "";
      this.description = options.description || "";
      this.client = options.client || "";
      this.nextProject = options.nextProject || "";
    }
  });

  return Project;

});
