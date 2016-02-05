var fs = require('fs');

// read synchronously
console.log('-- sync:');
var msg = fs.readFileSync(__dirname + '/msg.txt');
console.log(msg); // buffer
console.log(msg.toString()); // string

// read asynchronously
console.log('-- async:');
fs.readFile(__dirname + '/msg.txt', function(err, data) { // pattern: error first callback
	console.log(data); // buffer
	console.log(data.toString()); // string
});
console.log('This might happen first')
