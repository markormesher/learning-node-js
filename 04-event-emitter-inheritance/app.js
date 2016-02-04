lvar EventEmitter = require('events');
var util = require('util');

function Greeter() {
	EventEmitter.call(this); // << something like a super-constructor, to cause non-proto props of EventEmitter to be added onto 'this'
	this.greeting = 'Hello world, ';
}

util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function(name) {
	console.log(this.greeting + name);
	this.emit('greet', name);
}

var greeter1 = new Greeter();

greeter1.on('greet', function(name) {
	console.log('There was a greeting for ' + name);
});

greeter1.greet('Alan');
