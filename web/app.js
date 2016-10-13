var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');

var configuration = require('./config_proxy.js');

var app = express();

var BundleUp = require('bundle-up3-bf')
var assets = require('./assets');



//console.log(BundleUp.renderJs())

//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json({ limit: '2mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

BundleUp(app, assets, {
  staticRoot: path.join(__dirname, 'public'),
  staticUrlRoot: '/',
  bundle: false,
  minifyCss: false,
  minifyJs: false,
  complete: console.log.bind(console, "Bundle-up: static files are minified/ready")
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index');
});

app.use('/utility/version', function(req, res) {  
    res.end("0.0.3.17");
});

app.use('/utility/server_datetime', function(req, res) {  
    var date = new Date();
    res.json(date + "");  
});


app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json(err.message);
        res.end();
       
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json(err.message);
    res.end();
});

module.exports = app;
