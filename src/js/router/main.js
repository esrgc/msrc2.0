/*
Carl Flint
April 2017

router for MSRC 2.0.1
*/

/* dual stage click event for nested advisGroup on committees page*/
const advisGroup = () => {
   if ($('#advisDiv').is(':visible')) {
    $(location.hash).trigger('click');
  } else {
    $('#advisGroup').trigger('click');
    $(location.hash).trigger('click');
  }
};

let Router = Backbone.Router.extend({
  routes: {
    'comCEDS': 'comCEDS',
    'comEM': 'comEM',
    'comGIS': 'comGIS',
    'comIT': 'comIT',
    'comMUST': 'comMUST',
    '*other': 'event'/*catch all other hash change events and fire a click*/
  },
  initialize() {
    console.log('router is being initialized');
  },
  comCEDS() {
    // console.log('caught #comCEDS hashchange event!' + this.route);
    advisGroup();
  },
  comEM() {
    advisGroup();
  },
  comGIS() {
    advisGroup();
  },
  comIT() {
    advisGroup();
  },
  comMUST() {
    advisGroup();
  },
  event() {
    /*console.log('caught *event with backbone router');*/
    $(location.hash).trigger('click');
  }
});

export {Router};
