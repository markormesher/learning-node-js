var obj = {
	name: 'John Doe',
	intro: function() {
		console.log('Hi, my name is ' + this.name);
	},
	longerIntro: function(age, city) {
		console.log('Hi, my name is ' + this.name + ', I am ' + age + ' and I\'m from ' + city);
	}
};

obj.intro();

// .call() and .apply() change the context of 'this'

obj.intro.call({ name: 'Jane Doe' });

obj.intro.call({ name: 'Fred Bloggs' });

// .apply() also allows arguments

obj.longerIntro.apply({ name: 'Mark' }, [22, 'London']);