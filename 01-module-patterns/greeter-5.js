// pattern 5: use a new object (or add properties) to reveal a subset of functions and/or values
// AKA: the revealing module pattern
var greeting = 'Hello world';

function privateParser(input) {
	return input;
}

function greet() {
	console.log(privateParser(greeting));
}

module.exports = {
	greet: greet
};
