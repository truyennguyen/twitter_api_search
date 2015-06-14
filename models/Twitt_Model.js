var mongoose = require('mongoose');

var twittSchema = mongoose.Schema({
	created_at: String,
	text: String,
	name: String,
	screen_name: String,
	location: String
});

module.exports = mongoose.model("twitt", twittSchema);
