//Dependencies for our web server.
var express = require('express');
//body parser lets us receive JSON data in the body of POST requests.
var bodyParser = require('body-parser');
//path is helps us find the directory where our public assets are.
var path = require('path');

//Sets up web server.
var app = express();

//Sets server port.
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Gives us access the files in our `public` folder, so going to http://yourwebsite.com/ will open index.html, located in the `public` folder.
app.use(express.static(path.join(__dirname, 'public')));
		

//Starts the app on the port we defined earlier.
//To actually run the app, run `node index.js`
app.listen(app.get('port'), function() {
	console.log('App is running at http://localhost:%d', app.get('port')); 
	console.log('  Press CTRL-C to stop\n');
});

module.exports = app;