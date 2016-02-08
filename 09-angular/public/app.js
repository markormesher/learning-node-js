angular.module('angular-demo', []);

angular.module('angular-demo').controller('MainController', mainControllerFunction);

function mainControllerFunction() {
	this.message = 'Hello world';
	this.people = [
		{ name: 'Mark', age: 22 },
		{ name: 'Ana', age: 20 }
	];
}
