var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var friends = require('./app/data/friends.js');

var app = express();
var PORT = process.env.PORT || 8080;

// app.get('/', function (req, res) {
//   res.send('./routing/')
// })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});
