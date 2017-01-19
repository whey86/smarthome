var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var index = require('./routes/index');
var users = require('./routes/users');

var http = require("http");
var https = require("https");


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) { res.header('Access-Control-Allow-Origin', "*"); res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE'); res.header('Access-Control-Allow-Headers', 'Content-Type'); next();
})
app.use('/', index);
app.use('/users', users);


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;

// var express = require('express');



// var app = express();

// var index = require('./routes/index');

// // var wpi = require('wiring-pi');
// // wpi.setup('wpi');

// var pin = 7;

// // wpi.pinMode(pin, wpi.OUTPUT);
// //Routes

// //Home
// app.get('/', function(req,res){
// 	res.render(index.html);
// });

// app.get('/on', function(req,res){
	

// 	// wpi.digitalWrite(pin, 1);

// 	console.log("Light is on");
// });
// app.get('/off', function(req,res){
// // wpi.digitalWrite(pin, 0);
// });
// app.listen(3000, function(){
// 	console.log("App running on local port 3000");
// });
