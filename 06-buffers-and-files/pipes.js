var fs = require('fs');
var zlib = require('zlib');

// readable stream
var readable = fs.createReadStream(__dirname + '/lipsum.txt');

// writable stream 1
var writable1 = fs.createWriteStream(__dirname + '/lipsum-copy.txt');

// writable stream 2
var writable2 = fs.createWriteStream(__dirname + '/lipsum-compressed.txt');

// transform stream
var gzip = zlib.createGzip();

// pipe from readable into writable 1
readable.pipe(writable1);

// pipe from readable into writable 2, via gzip pipe
readable.pipe(gzip).pipe(writable2); // method chaining
