var express = require('express');
var app = express();
var mongoose = require('mongoose');

var twittRoutes = express.Router();
require('./routes/twitter_routes')(twittRoutes);
app.use('/api', twittRoutes);

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/books');

require('./routes/twitter_stream_service')();

app.listen(process.env.PORT || 3000, function(){
	console.log('Server running on port' + (process.env.PORT || 3000));
});