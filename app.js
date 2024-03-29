var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

mongoose.connect('mongodb://localhost/thiscompanysellsdrugs');

app.get('/', function(req, res) {
	res.render('index');
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	res.render('applicants');
	// console.log(req.body);
});

// creates and applicant
app.post('/applicant', function(req, res){
	// Here is where you need to get the data
	// from the post body and store it in the database
	
	console.log(req.body);
	res.redirect('/success');
});

app.get('/success', function(req, res){
	res.render('success');
});

var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});
