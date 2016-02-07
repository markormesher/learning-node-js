var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	var html = fs.readFileSync(__dirname + '/index.html').toString().replace('{msg}', Math.random());
	res.end(html);

}).listen(3000);
