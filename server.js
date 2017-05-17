var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000; //3000 is port number, process.env.PORT is environment variable's port

/*
app.use(function(req, res, next){							// express middleware
	if (req.headers['x-forwarded-proto'] === 'http') {		// req.headers['x-forwarded-proto'] doesn't exist locally
		next();
	} else {
		res.redirect('http://' + req.hostname + req.url);	// so this line always run --> cannot access localhost
	}
});
*/

// update middleware
app.use(function(req, res, next){
	if (req.headers['x-forwarded-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});

app.use(express.static('public'));

app.listen(PORT, function () {
	console.log('Express server is up on port ' + PORT);
});