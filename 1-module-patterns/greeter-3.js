// pattern 3: replace the empty exports object with a new object
function Greeter() {
	this.message = 'Hello world';
	this.greet = function() {
		console.log(this.message);
	};
}

module.exports = new Greeter();
