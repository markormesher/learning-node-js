// pattern 1: replace the empty exports object
var greeter1 = require('./greeter-1');
greeter1();

// pattern 2-a: add a property to the empty exports object
var greeter2a = require('./greeter-2');
greeter2a.greet();

// pattern 2-b: add a property to the empty exports object
var greeter2b = require('./greeter-2').greet;
greeter2b();

// pattern 3: replace the empty exports object with a new object
var greeter3a = require('./greeter-3');
greeter3a.greet();

// NOTE: the module is cached, and the second call of require returns a reference to the same object
greeter3a.message = 'Hello world (changed)';
var greeter3b = require('./greeter-3');
greeter3b.greet();

// pattern 4: replace the empty exports object with a function to create a new object
var Greeter4 = require('./greeter-4');
var greeter4a = new Greeter4();
greeter4a.message = 'Hello world (changed)';
greeter4a.greet();

// NOTE: output not changed, like above
var greeter4b = new Greeter4();
greeter4b.greet();

// pattern 5: use a new object (or add properties) to reveal a subset of functions and/or values
// AKA: the revealing module pattern
var greeter5 = require('./greeter-5');
greeter5.greet();
// note: greeter5.privateParser(...) is unavailable now
