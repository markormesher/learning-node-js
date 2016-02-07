var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	var data = {
		first_name: 'Mark',
		last_name: 'Ormesher',
		age: 22
	};

	res.end(JSON.stringify(data));

}).listen(3000);
