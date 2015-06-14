var mongoose = require('mongoose');

var twitterSchema = mongoose.Schema({
	created_at: String,
	text: String,
	name: String,
	screen_name: String,
	location: String
});

module.exports = mongoose.model("Books", twitterSchema);
