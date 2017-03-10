var Backbone = require('backbone');
var $ = require('jquery');

require('./router.js');

// DOM Ready
$(function(){
  Backbone.history.start();
});
