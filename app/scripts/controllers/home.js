define([
  'text!projects.json',
  'models/Project',
  'hbs!templates/home'
], function (projects, project, homeTpl) {

  var Home = function(isDirectLink) {
    projects = typeof projects === 'object'
      ? projects
      : JSON.parse(projects).elements;
    /*
     * Checks whether the home has to be
     * hidden as it's a direct link
     */
    if (isDirectLink !== null) {
      Backbone.$('.content').html(homeTpl());
      Backbone.$('.home').css('display', 'none');
    } else {
      Backbone.$('.content').html(homeTpl());
    }

    for (var i = 0; i<projects.length; i++) {
      Backbone.$('.project').eq(i).css("background-image","url("+projects[i].image+")");
    }
  };

  return Home;
});
