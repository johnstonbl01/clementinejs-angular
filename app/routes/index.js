'use strict';

// Store current working directory
var path = process.cwd();

// Require the server-side controller - clickHandler
var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');

// Extend (export) the functionality in this file
// and make available to Node
module.exports = function (app, db) {

// Create a new instance of the ClickHandler object (outlined in the clickHandler controller file)
var clickHandler = new ClickHandler(db);

	// Define HTTP GET route for root (/index)
	app.route('/')
		// If an HTTP get request is sent to the server from the browser...
		.get(function (req, res) {
			// Respond by sending the browswer the index.html file
			res.sendFile(path + '/public/index.html');
		});

	// API routes - used to make data available between database and client
	app.route('/api/clicks')
		// If an HTTP get request, then run the getClicks() method of the clickHandler object
		.get(clickHandler.getClicks)
		// If an HTTP post request, then run the addClick() method of the clickHandler object
		.post(clickHandler.addClick)
		// If an HTTP delete request, then run the resetClicks() method of the clickHandler object
		.delete(clickHandler.resetClicks);
};
