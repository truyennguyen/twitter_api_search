process.env.MONGO_URI = 'mongodb://localhost/twitt';
require('../server.js'); //run our server
var mongoose = require('mongoose');
var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
var Twitt_Model = require('../models/Twitt_Model');

chai.use(chaihttp);

describe('Twitt API test', function() {
	after(function(done){
		mongoose.connection.db.dropDatabase(function() {
			done();
		});
	});

    it('should be able to add bubblegum1', function(done) {
    	chai.request('localhost:3000')
		.post('/api/twitt')
		.send({created_at:'Sun Jun 14 9:29:00', text: 'bubblegum1', name:'my name is number 1', screen_name: 'number1', location: 'Seattle'})
		.end(function(err, res){
			expect(res.body.msg).to.eql('success');
			done()
		});
    });

    it('should be able to add bubblegum2', function(done) {
    	chai.request('localhost:3000')
		.post('/api/twitt')
		.send({created_at:'Sun Jun 14 9:29:00', text: 'bubblegum2', name:'my name is number 2', screen_name: 'number2', location: 'Vancouver'})
		.end(function(err, res){
			expect(res.body.msg).to.eql('success');
			done()
		});
    });

    it('should be able to add bubblegum3', function(done) {
    	chai.request('localhost:3000')
		.post('/api/twitt')
		.send({created_at:'Sun Jun 14 9:29:00', text: 'bubblegum3', name:'my name is number 3', screen_name: 'number3', location: 'Bellingham'})
		.end(function(err, res){
			expect(res.body.msg).to.eql('success');
			done()
		});
    });

    it('should be able to add bubblegum4', function(done) {
    	chai.request('localhost:3000')
		.post('/api/twitt')
		.send({created_at:'Sun Jun 14 9:29:00', text: 'bubblegum4', name:'my name is number 4', screen_name: 'number4', location: 'Victoria'})
		.end(function(err, res){
			expect(res.body.msg).to.eql('success');
			done()
		});
    });

    it('should be able to add bubblegum5', function(done) {
    	chai.request('localhost:3000')
		.post('/api/twitt')
		.send({created_at:'Sun Jun 14 9:29:00', text: 'bubblegum5', name:'my name is number 5', screen_name: 'number5', location: 'Bothell'})
		.end(function(err, res){
			expect(res.body.msg).to.eql('success');
			done()
		});
    });

    it('should be able to get a range of twitts with pagination', function(done) {
		var index = 2;
		chai.request('localhost:3000')
		.get('/api/twitt?offset=1&limit=3')
		.end(function(err, res){
			res.body.forEach(function(twittElement){
				expect(twittElement.text).to.eql('bubblegum' + index++);
			});
			done();
		});
    });
});