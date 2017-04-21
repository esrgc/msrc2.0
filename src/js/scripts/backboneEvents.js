/* implement Backbone.Events functionality */


let Events = Backbone.history.on('#comCEDS', function() {
  console.log('Caught #comCEDS hash from router!');
});

export { Events }
