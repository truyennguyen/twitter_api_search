'use strict';

var Twitter_Model = require('../models/Twitter_Model');
var bodyparser = require('body-parser');

module.exports = function(router){
  router.use(bodyparser.json());

  //get all songs
	router.get('/alltwitter', function(req, res) {
		Twitter_Model.find({}, function(err, data){
			if(err){
				console.log(err);
				return res.status(500).json({msg: 'internal server error'});
			}
			res.json(data);
		});
	});

  //get all songs
  router.get('/twitter', function(req, res) {
    var offset = req.param('offset');
    var limit = req.param('limit');

    var query = Twitter_Model.find({});
    query.skip(offset).limit(limit).exec('find', function(err, data) {
      if(err){
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      }
      res.json(data);
    });
  });
};