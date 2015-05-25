'use strict';

// Define dependencies
var express = require('express'), // Express framework
	routes = require('./app/routes/index.js'), //Application route file
	mongo = require('mongodb').MongoClient; // MongoDB connection client

// Initialize Express
var app = express();

// Connect to Mongo database (clementinejs)
// If the database doesn't exist, Mongo should dynamically create it
mongo.connect('mongodb://localhost:27017/clementinejs', function (err, db) {

	// If an error occurs while trying to connect to the database...
	if (err) {
		// throw a custom error message
		throw new Error('Database failed to connect!');
	// If the connection is successfull...
	} else {
		// log a success message
		console.log('MongoDB successfully connected on port 27017.');
	}

	// Set static folder values for concise folder locations
	// These allow for easier links in HTML & JS files
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

