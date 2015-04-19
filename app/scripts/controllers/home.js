define([
  'hbs!templates/home'
], function (homeTpl) {

  var Home = function(isDirectLink) {

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
  };

  return Home;
});
