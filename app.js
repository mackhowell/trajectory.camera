var express = require('express');
var path = require('path');
// var favicon = require('static-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
var debug = require('debug')('my-application');

// var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});