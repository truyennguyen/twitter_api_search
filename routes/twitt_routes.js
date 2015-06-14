'use strict';

var Twitt_Model = require('../models/Twitt_Model');
var bodyparser = require('body-parser');

module.exports = function(router){
  router.use(bodyparser.json());

  //get all twitts
	router.get('/alltwitts', function(req, res) {
		Twitt_Model.find({}, function(err, data){
			if(err){
				console.log(err);
				return res.status(500).json({msg: 'unable to get all twitts'});
			}
			res.json(data);
		});
	});

  //add a new twitt
  router.post('/twitt', function(req, res) {
    var newTwitt = new Twitt_Model(req.body);
    newTwitt.save(function(err, data){
      if(err)
        return res.status(500).json({msg: 'unable to post a twitt'});
      res.json({msg: 'success'});
    });
  });

  //get a range of twitts with pagination 
  router.get('/twitt', function(req, res) {
    var offset = req.param('offset');
    var limit = req.param('limit');

    var query = Twitt_Model.find({});
    query.skip(offset).limit(limit).exec('find', function(err, data) {
      if(err){
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      }
      res.json(data);
    });
  });
};