// event names from config

var config = require('./config');

// DIY version

var DiyEmitter = require('./emitter');

var diyEmtr = new DiyEmitter();

diyEmtr.on(config.events.EVENT_1, function() {
	console.log('event1 happened! (reported by listener 0)');
});

diyEmtr.on(config.events.EVENT_1, function() {
	console.log('event1 happened! (reported by listener 1)');
});

diyEmtr.emit(config.events.EVENT_1);

// Node.js version

var NodeEmitter = require('events');

var nodeEmtr = new NodeEmitter();

nodeEmtr.on(config.events.EVENT_2, function() {
	console.log('event2 happened! (reported by listener 0)');
});

nodeEmtr.on(config.events.EVENT_2, function() {
	console.log('event2 happened! (reported by listener 1)');
});

nodeEmtr.emit(config.events.EVENT_2);