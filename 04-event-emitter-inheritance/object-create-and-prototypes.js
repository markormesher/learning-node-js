var person = {
	fName: '',
	lName: '',
	intro: function() {
		console.log('Hi, I\'m ' + this.fName + ' ' + this.lName);
	}
};

var joe = Object.create(person);
joe.fName = 'Joe';
joe.lName = 'Bloggs';

var jane = Object.create(person);
jane.fName = 'Jane';
jane.lName = 'Bloggs';

joe.intro();
jane.intro();