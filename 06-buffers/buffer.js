// creates a new buffer, with room for 5 characters and UTF-8 encoding
var buffer = new Buffer('Hello', 'utf-8');

console.log(buffer); // <Buffer 48 65 6c 6c 6f>

console.log(buffer.toString()); // Hello

console.log(buffer[0]); // 72

console.log(buffer[0].toString()); // 72

buffer.write('World');

console.log(buffer.toString()) // World (NOTE: original data has been replaced)

console.log(buffer); // <Buffer 57 6f 72 6c 64>
