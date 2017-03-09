var $ = require('jquery');

$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader("X-Parse-Application-Id", "tiygvl");
    xhr.setRequestHeader("X-Parse-REST-API-Key", "slumber");

  }
});
var apiUrl = 'https://tiny-parse-server.herokuapp.com/classes';
$.get(apiUrl + '/ryan').then(function(data){
console.log(data);
})

$('#signup').on('submit', function(e){
  e.preventDefault();

  var username = $('#signup-email').val();
  var password = $('#signup-password').val();
  console.log(username, password);
});
