/**
 * Setup and run our Express server
 *
 * This server is used during development and is not necessary for production
 * once all static files have been rendered out
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');

var app = express();


var server;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// all environments
app.set('port', process.env.PORT || 3300);

app.use(function (req, res, next) {

  var origin = req.headers.origin;

  // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', origin);

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'JOIN, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Mock REST API
app.post('/api/article', routes.article);//
app.get('/api/articles', routes.articles);//

server = http.createServer(app);
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
  console.log('Node environment is ' + app.get('env'));
});
