var Twitter_Model = require('../models/Twitter_Model');
var Twitter = require('node-twitter');

module.exports = function(){
  var twitterStreamClient = new Twitter.StreamClient(
      'O8tiQyMc6JcpnXObWSGbGKQ6q',
      '9spxoLHjXalNbbzchBOJwookR3sBLce4nBCLIrcn4wLvf3i2N4',
      '286789830-qiefAnO0JGAJB6mkRB1YdbNYT1PVWtRJH6097Tf9',
      'ffzLfbJFSA4XsalUPsBV9Jyd9SuEvRdaE5nbDIXwCHCfr'
  );

  twitterStreamClient.on('close', function() {
      console.log('Connection closed.');
  });
  twitterStreamClient.on('end', function() {
      console.log('End of Line.');
  });
  twitterStreamClient.on('error', function(error) {
      console.log('Error: ' + (error.code ? error.code + ' ' + error.message : error.message));
  });
  twitterStreamClient.on('tweet', function(tweet) {

    var newTwitterModel = new Twitter_Model();
    newTwitterModel.created_at = tweet.created_at;
    newTwitterModel.text = tweet.text;
    newTwitterModel.name = tweet.user.name;
    newTwitterModel.screen_name = tweet.user.screen_name;
    newTwitterModel.location = tweet.user.location;

    newTwitterModel.save(function(err, data){
      if(err) 
        return res.status(500).json({msg: 'internal server error'});
    });
  });

  twitterStreamClient.start(['bubblegum']);
};