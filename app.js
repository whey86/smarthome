var express = require('express');



var app = express();

var wpi = require('wiring-pi');
wpi.setup('wpi');

var pin = 7;

wpi.pinMode(pin, wpi.OUTPUT);
//Routes

//Home
app.get('/', function(req,res){
	res.send("This is a server");
});

app.get('/on', function(req,res){
	

	wpi.digitalWrite(pin, 1);

	console.log("Light is on");
});
app.get('/off', function(req,res){
wpi.digitalWrite(pin, 0);
});
app.listen(3000, function(){
		console.log("App running on local port 3000");
});
