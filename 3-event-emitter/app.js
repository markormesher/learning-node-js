// DIY version

var DiyEmitter = require('./emitter');

var diyEmtr = new DiyEmitter();

diyEmtr.on('event1', function() {
	console.log('event1 happened! (reported by listener 0)');
});

diyEmtr.on('event1', function() {
	console.log('event1 happened! (reported by listener 1)');
});

diyEmtr.emit('event1');

// Node.js version

var NodeEmitter = require('events');

var nodeEmtr = new NodeEmitter();

nodeEmtr.on('event2', function() {
	console.log('event2 happened! (reported by listener 0)');
});

nodeEmtr.on('event2', function() {
	console.log('event2 happened! (reported by listener 1)');
});

nodeEmtr.emit('event2');