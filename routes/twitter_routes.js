'use strict';

var Twitter_Model = require('../models/Twitter_Model');
var bodyparser = require('body-parser');

module.exports = function(router){
  router.use(bodyparser.json());

  //get all songs
	router.get('/alltwitt', function(req, res) {
		Twitter_Model.find({}, function(err, data){
			if(err){
				console.log(err);
				return res.status(500).json({msg: 'internal server error'});
			}
			res.json(data);
		});
	});

  router.post('/twitt', function(req, res) {
    var newTwitter = new Twitter_Model(req.body);
    newTwitter.save(function(err, data){
      if(err)
        return res.status(500).json({msg: 'unable to post a twitt'});
      res.json({msg: 'success'});
    });
  });

  //get all songs
  router.get('/twitt', function(req, res) {
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