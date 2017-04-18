/*
Carl Flint
April 2017

router for MSRC 2.0.1
*/

export default Backbone.Router.extend({
  name: 'main',
  initialize(options) {
    this.options = options;
    console.log('router is being initialized');
    this.controllers = options.controllers;
  },
  index() {
    this.controllers.home.index();
  },
  about() {
    this.controllers.home.about();
  },
  committees() {
    this.controllers.home.committees();
  },
  partners() {
    this.controllers.home.partners();
  }
});
