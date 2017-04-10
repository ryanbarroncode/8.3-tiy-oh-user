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
 },

 signup: function(credentials){
    var newUser = new User(credentials);
    newUser.save().then(() => {
      User.store(newUser);
    });
    return newUser;
  },
  store: function(user){
    localStorage.setItem('user', JSON.stringify(user.toJSON()));
  },
  current: function(){
    var user = localStorage.getItem('user');

    // if no user in local storage, bail
    if(!user){
      return false;
    }

    user = new User(JSON.parse(user));

    // If we don't have a token, bail
    if(!user.get('sessionToken')){
      return false;
    }

    return user;
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
