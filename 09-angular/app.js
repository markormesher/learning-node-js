var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'jade');

app.use('/', function (req, res) {
	res.render('index');
});

app.listen(3000);
