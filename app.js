var express = require('express');
var app = express();

var port = process.env.PORT || 8080; //default port for Heroku cloud platform

app.set('view engine', 'ejs'); //ejs is a template engine

app.use(express.static(__dirname + '/public'));//filters

/* http://localhost:8080 */
app.get('/', function(req, res) {

	res.render('home', { 
		title: "Employee Portal",
		headline: "We believe that every city have something to say!",
		imageCount: 1
	});

});

/* http://localhost:8080/newyork */
app.get('/:city', function(req, res) {
	var cityName = req.params.city;
	var title;
	var headline = "";
	var imageCount = 2;

	if(req.params.city == "berlin"){
		title = "Berlin";
		headline = "Berlin city is Awesome!"
	}
	else if(req.params.city == "london"){
		title = "London";
		headline = "London is a beatutiful city!";
	}
	else if(req.params.city == "madrid"){
		title = "Madrid"
		headline = "Madrid is smallest city";
	}
	else if(req.params.city == "newyork"){
		title = "New York";
		headline = "New York has liberty of statute";
		imageCount = 4;
	}

	res.render('home', { 
		title: title,
		headline: headline,
		imageCount: imageCount,
		city: cityName
	});



});

app.listen(port, function() {
	console.log('Server listening on %s', port);
});

