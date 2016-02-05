var fs = require('fs');

// readable stream
var readable = fs.createReadStream(__dirname + '/lipsum.txt', {highWaterMark: 32 * 1024}); // to get text, add the option 'encoding': 'utf8'

// writable stream
var writable = fs.createWriteStream(__dirname + '/lipsum-copy.txt');

// read from readable stream
readable.on('data', function(chunk) {
	// print
	console.log(chunk); // will fire a few times, because the buffer size is 32kb and the file is 71kb

	// write to writable stream
	writable.write(chunk);
});

