define([
  'text!projects.json',
  'models/Project',
  'views/project',
  'views/unknown'
], function (projects, ProjectModel, ProjectView, UnknownView) {

  var Project = function(project) {
    /* We parse the projects only once, right after we loaded them */
    projects = typeof projects === 'object'
      ? projects
      : JSON.parse(projects).elements;

    /* We check whether the project exists */
    var current = projects.filter(function(el) {
      return el.slug === project;
    });

    if (current && current[0]) {
      var project = new ProjectModel(current[0]),
          elementClass = ".project-" + current[0].slug;

      new ProjectView({ model: project, className: elementClass });
    } else {
      new UnknownView();
    }
  };

  return Project;
});
