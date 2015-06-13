var bodyparser = require('body-parser');
var http = require('http');
var request = require('request');

module.exports = function(router){
  router.use(bodyparser.json());

  console.log('inside');

  var oauth =
      { consumer_key: 'O8tiQyMc6JcpnXObWSGbGKQ6q'
      , consumer_secret: '9spxoLHjXalNbbzchBOJwookR3sBLce4nBCLIrcn4wLvf3i2N4'
      , token: '286789830-qiefAnO0JGAJB6mkRB1YdbNYT1PVWtRJH6097Tf9'
      , token_secret: 'ffzLfbJFSA4XsalUPsBV9Jyd9SuEvRdaE5nbDIXwCHCfr'
      };
  router.get('/tweets', function(req, res){
    console.log('inside2');
    request.get({
      url: 'https://stream.twitter.com/1.1/statuses/sample.json',
      oauth:oauth, json:true}, function(err, response, body){
        if(err){
          return res.status(500).json({msg: 'internal server error'});
        }
        else{
          console.log(body);
        }
      })
    });
};