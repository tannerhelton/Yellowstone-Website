var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use('/', express.static(__dirname));

var server = http.listen(3000, function() {
	console.log('Server root directory: ' + __dirname);
	console.log('Server listening on http://localhost:3000/');
});


