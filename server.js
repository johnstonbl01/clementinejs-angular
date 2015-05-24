'use strict';

// Define dependencies
var express = require('express'), // Express framework
	routes = require('./app/routes/index.js'), //Application route file
	mongo = require('mongodb').MongoClient; // MongoDB connection client

// Initialize Express
var app = express();

mongo.connect('mongodb://localhost:27017/clemjsdb', function (err, db) {
	if (err) {
		throw new Error('Database failed to connect!');
	} else {
		console.log('MongoDB successfully connected on port 27017.');
	}

	// Set static folder values for concise folder locations
	app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
	app.use('/public', express.static(process.cwd() + '/public'));

	// Initialize application routes
	routes(app, db);

	// Express will listen on defined port
	var port = 3000;
	app.listen(port, function () {
		console.log('Node.js listening on port ' + port + '...');
	});

});

