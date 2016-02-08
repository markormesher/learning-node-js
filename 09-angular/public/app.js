angular.module('angular-demo', []);

angular.module('angular-demo').controller('MainController', mainControllerFunction);

function mainControllerFunction() {
	this.message = 'Hello world';
	this.people = peopleFromServer;
}
