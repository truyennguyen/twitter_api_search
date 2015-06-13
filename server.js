var mongoose = require('mongoose');
var express = require('express');
var app = express();

var twitterRoutes = express.Router();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/twitter_info');

require('./routes/twitter_routes')(twitterRoutes);

app.use('/api', twitterRoutes);

app.listen(process.env.PORT || 3000, function(){
	console.log('Server running on port' + (process.env.PORT || 3000));
});