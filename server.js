'use strict';

// Define dependencies
var express = require('express'),
	mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/clemjsdb', function (err, db) {
	if (err) { throw err; }

	
});

// Initialize Express
var app = express();

// Set static folder values for concise folder locations

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

// Include route file and pass express app as an argument
require('./app/routes/index.js')(app);

// Express will listen on defined port
var port = 3000;
app.listen(port, function () {
	console.log('Node.js listening on port ' + port + '...');
});
