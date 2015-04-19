define([
  'controllers/home',
  'controllers/project',
  'controllers/projects',
  'controllers/404'
], function (Home, Project, Projects, Unknown) {

  var Controller = {};

  Controller.home     = Home;
  Controller.project  = Project;
  Controller.projects = Projects;
  Controller.unknown  = Unknown;

  return Controller;
});
