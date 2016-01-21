var Emitter = require('./emitter');

var emtr1 = new Emitter();

emtr1.on('event1', function() {
	console.log('event1 happened! (reported by listener 0)');
});

emtr1.on('event1', function() {
	console.log('event1 happened! (reported by listener 1)');
});

emtr1.emit('event1');