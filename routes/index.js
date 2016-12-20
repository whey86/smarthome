var express = require('express');
var router = express.Router();
var path = require('path');

var request = require("request");

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
});

router.post('/bed-blue', function(req, res){
	console.log("change");
	var val = req.body.val;
	console.log("Value " + val);
	request.get({url: "http://192.168.1.50", 
             qs: {blu:val}},
            function(error, response, body){
               console.log(res.statusCode);
               console.log(res.headers);
            });
});




module.exports = router;
