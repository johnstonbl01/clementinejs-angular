'use strict';

// Store current working directory
var path = process.cwd();

var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');

// Extend (export) the functionality in this file
// and make available to Node
module.exports = function (app, db) {

var clickHandler = new ClickHandler(db);

	// Define HTTP GET route for root (/index)
	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});

	// API routes
	app.route('/api/clicks')
		.get(clickHandler.getClicks)
		.post(clickHandler.addClick)
		.delete(clickHandler.resetClicks);
};
