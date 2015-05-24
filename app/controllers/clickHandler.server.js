'use strict';

function ClickHandler (db) {
	var clicks = db.collection('clicks');

	this.getClicks = function (req, res) {
		clicks
			.findOne(
				{},
				{ '_id': false },
				function (err, result) {
					if (err) { throw err; }
					var clickResults = [];

					if (result) {

						clickResults.push(result);
						res.json(clickResults);
					} else {
						clicks.insert({ 'clicks': 0 }, function (error, newdoc) {
							if (err) { throw err; }

							clickResults.push(newdoc);
							res.json(clickResults);
						});

					}
				}
			);
	};

	this.addClick = function (req, res) {
		clicks
			.findAndModify(
				{}, // Query parameters -- this will return all documents
				{ '_id': 1 }, // Sort parameters
				{ $inc: { 'clicks': 1 } }, // Update parameters -- increment the value of clicks by 1
				function (err, result) {
					if (err) { throw err; }

					res.json(result);
				}
			);
	};

	this.resetClicks = function (req, res) {
		clicks
			.update(
				{},
				{ 'clicks': 0 },
				function (err, result) {
					if (err) { throw err; }

					res.json(result);
				}
			);
	};

}

module.exports = ClickHandler;
