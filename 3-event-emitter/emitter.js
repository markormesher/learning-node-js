function Emitter() {
	this.events = {};
}

Emitter.prototype.on = function (type, listener) {
	// get or create an array
	this.events[type] = this.events[type] || [];

	// add listener
	this.events[type].push(listener);
};

Emitter.prototype.emit = function (type) {
	// check that type exists
	if (this.events[type]) {
		// loop all listeners
		this.events[type].forEach(function (listener) {
			// execute them
			listener();
		});
	}
};

module.exports = Emitter;