'use strict';

// Extend (export) the functionality in this file
// and make available to Node
module.exports = function (app) {

	// Store current working directory
	var path = process.cwd();

	// Define HTTP GET route for root (/index)
	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});
};
