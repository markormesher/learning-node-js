// pattern 4: replace the empty exports object with a function to create a new object
function Greeter() {
	this.message = 'Hello world';
	this.greet = function() {
		console.log(this.message);
	};
}

module.exports = Greeter;
