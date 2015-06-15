Use Twitter’s public API to stream tweets with the keyword 'bubblegum'

```
Initialize:
	create a 'db' folder in the root folder
	'npm install' to install all dependencies
To run the server:
	start the database: 'mongod --dbpath=./db --smallfiles'
	start server 'node server.js'

	'http://localhost:3000/api/alltwitts' to get all twitts with keyword 'bubblegum'
	'http://localhost:3000/api/twitt?offset=10&limit=5' to get a range of twitts with pagination
To run the tests:
	run 'mocha' on the root folder
```