/**
 * Dependencies
 */

var express = require('express');
var routes = require('./routes');
var path = require('path');

/**
 * Make app
 */

var app = express();

/**
 * Configure
 */

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger());
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, '/bootstrap')));

/**
 * Routes
 */

app.get("/", routes.index);
app.get("/landing", routes.landing);
app.get("/california", routes.california);
app.get("/california/1", routes.cali_one);
app.get("/california/2", routes.cali_two);
app.get("/california/3", routes.cali_three);
app.get("/california/4", routes.cali_four);
app.get("/california/quiz", routes.cali_quiz);
app.get("/california/cellar", routes.cali_cellar);

/**
 * Listen
 */

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
});
