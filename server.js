var express = require('express');

// Create our app
var app = express();

app.use(express.static('public'));

app.listen(3000, function () {	//3000 is port number
	console.log('Express server is up on port 3000')
});