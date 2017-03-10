var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var SignInContainer = require('./components/signin.jsx').SignInContainer;
var ChatContainer = require('./components/message.jsx').ChatContainer;

var parse = require('./parse.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'signin/': 'signin',
    'chat/': 'chat'
  },

  initialize: function(){
    parse.setup({
         BASE_API_URL: 'https://tiny-parse-server.herokuapp.com'
       });
     },

    index: function(){
      ReactDOM.render(
        React.createElement(SignInContainer),
        document.getElementById('app')
      );
    },

  signin: function(){
    ReactDOM.render(
      React.createElement(SignInContainer),
      document.getElementById('app')
    );
  },

  chat: function(){
    ReactDOM.render(
      React.createElement(ChatContainer),
      document.getElementById('app')
    )
  }

});

var appRouter = new AppRouter();

module.exports = {
  appRouter
};
