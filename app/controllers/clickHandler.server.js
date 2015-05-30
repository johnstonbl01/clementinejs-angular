'use strict';

// Define the ClickHandler function object
function ClickHandler (db) {
	// Define the database collection to use
	// A collection is analagous to a SQL table
	var clicks = db.collection('clicks');

	// Define a getClicks() method
	this.getClicks = function (req, res) {
		// Query the database
		clicks
			.findOne( // findOne will return a single document
				{}, // Query parameters - this will return all documents
				{ '_id': false }, // Projection criteria - this will exclude the _id field from the results
				// Callback function that executes once the query has finished
				function (err, result) {
					// If there is an error, throw an error
					if (err) { throw err; }

					// Define an empty result array
					// This is done because the Angular $resource.query needs and array in the API
					var clickResults = [];

					// If query is successful and returns a result...
					if (result) {
						// Push the result to the clickResults array
						clickResults.push(result);
						// Send the results in JSON format back to the client
						res.json(clickResults);

					// If query does not return a result...
					} else {

						// Insert a new document into the database
						// This traditionally only happens the first time the application is run
						clicks.insert({ 'clicks': 0 }, function (err) {
							// If there is an error, throw an error
							if (err) { throw err; }

							// Find the newly inserted document
							// Uses same findOne parameters as query above
							clicks.findOne({}, {'_id': false}, function (err, doc) {
								// If there is an error, throw an error
								if (err) { throw err; }

								// Push the resulting document to the clickResults array
								clickResults.push(doc);
								// Send the results in JSON format back to the client
								res.json(clickResults);
							});

						});

					}
				}
			);
	};

	// Define an addClick() method
	this.addClick = function (req, res) {
		clicks
			.findAndModify( // findAndModify will find a document and modify it
				{}, // Query parameters -- this will return all documents
				{ '_id': 1 }, // Sort parameters
				{ $inc: { 'clicks': 1 } }, // Update parameters -- increment the value of clicks by 1
				// Callback function that executes once the query has finished
				function (err, result) {
					// If there is an error, throw an error
					if (err) { throw err; }

					// Respond with the result of the query in JSON format
					res.json(result);
				}
			);
	};

	// Define a resetClicks() method
	this.resetClicks = function (req, res) {
		clicks
			.update( // Will update the document found by the query
				{}, // Query parameters -- this will return all documents
				{ 'clicks': 0 }, // Updates the document to reset number of clicks
				// Callback funciton that executes once the query has finished
				function (err, result) {
					// If there is an error, throw an error
					if (err) { throw err; }

					// Respond with the result of the query in JSON format
					res.json(result);
				}
			);
	};

}

module.exports = ClickHandler;
