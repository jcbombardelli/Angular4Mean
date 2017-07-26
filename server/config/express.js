var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

app.set('clientDistPath', path.join(__dirname, '../../client/dist'));
app.use(express.static(app.get('clientDistPath')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//var routes = require('../routes/route');
//routes(app);

app.get('*', (req, res) => {
  res.sendFile(app.get('clientPath'));
});

module.exports = app;