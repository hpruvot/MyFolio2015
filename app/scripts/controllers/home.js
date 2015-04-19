define(['hbs!templates/home'], function (homeTpl) {

  var Home = function() {
    document.querySelector('.content').innerHTML = homeTpl();
    console.log('Home page!');
  };

  return Home;
});
