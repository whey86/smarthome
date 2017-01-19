var express = require('express');
var router = express.Router();
var path = require('path');

var request = require("request");

// var wpi = require('wiring-pi');
// wpi.setup('wpi');

// var pin = 7;

// wpi.pinMode(pin, wpi.OUTPUT);

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Home Remote', deskIsOn : 'Lampa' });

   // res.render('start', { title: 'Home Remote', deskIsOn : 'Lampa' });
    // res.sendFile(path.join(__dirname+'/start.html'));
  // res.send("test");
});

router.post('/bed-red', function(req, res){
	console.log("change");
	var val = req.body.val;
	console.log("Value " + val);
	request.get({url: "http://192.168.1.50", 
		qs: {red:val}},
		function(error, response, body){
			console.log(res.statusCode);
			console.log(res.headers);
		});
	res.end();
});

router.post('/bed-green', function(req, res){
	console.log("change");
	var val = req.body.val;
	console.log("Value " + val);
	request.get({url: "http://192.168.1.50", 
		qs: {gre:val}},
		function(error, response, body){
			console.log(res.statusCode);
			console.log(res.headers);
		});
	res.end();
});

router.post('/bed-blue', function(req, res){
	console.log("change");
	var val = req.body.val;
	console.log("Value " + val);
	request.get({url: "http://192.168.1.50", 
		qs: {blu:val},
		agent : false
	},
	function(error, response, body){
		console.log(res.statusCode);
		console.log(res.headers);
	});
	res.end();
});

router.post('/desk', function(req, res){
	// var val = req.body.val;
	// if(val == 'on'){
	// 	wpi.digitalWrite(pin, 1);
	// }else{
	// 	wpi.digitalWrite(pin, 0);
	// }
	// req.end();
});



module.exports = router;
