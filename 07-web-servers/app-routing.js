var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

	if (req.url === '/api') {
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		var html = fs.readFileSync(__dirname + '/index.html').toString().replace('{msg}', Math.random());
		res.end(html);
	} else {
		res.writeHead(404);
		res.end('Not found');
	}

}).listen(3000);
