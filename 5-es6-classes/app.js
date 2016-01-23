'use strict';

class Person {
	constructor(fName, lName) {
		this.fName = fName;
		this.lName = lName;
	}

	greet() {
		console.log('Hello, ' + this.fName + ' ' + this.lName + '!');
	}
}

var john = new Person('John', 'Winchester');

john.greet();
