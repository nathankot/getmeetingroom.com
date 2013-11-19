'use strict';

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
var config = {
  APP_ROOT: path.join(path.dirname(require.main.filename))
};

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
  app.use(express.static(path.join(config.APP_ROOT, 'app')));
  app.use(express.static(path.join(config.APP_ROOT, '.tmp')));
} else {
  app.use(express.static(path.join(config.APP_ROOT, 'dist')));
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
