var Backbone = require('backbone');
var $ = require('jquery');

var parse = require('../parse');

var User = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: function() {
    return parse.BASE_API_URL + '/users';
  }
  },{
  login: function(credentials, callback){
    var url = parse.BASE_API_URL + '/login?' + $.param(credentials)
    $.get(url).then(data => {
     var user = new User(data);
     User.store(user);
     callback();
   });

  }
});

var Login = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: 'https://tiny-parse-server.herokuapp.com/users/'
});

module.exports = {
  User,
  Login,
};
