var express     = require('express');
    bodyParser  = require('body-parser');
    path        = require('path');
    app         = express();

//Sets server port.
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs')

//Gives us access the files in our `public` folder, so going to http://yourwebsite.com/ will open index.html, located in the `public` folder.
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.render("index");
});

app.get("*", function(req, res) {
    res.render("error");
})

//Starts the app on the port we defined earlier.
//To actually run the app, run `node index.js`
app.listen(app.get('port'), function() {
	console.log('App is running at http://localhost:%d', app.get('port')); 
	console.log('  Press CTRL-C to stop\n');
});

module.exports = app;