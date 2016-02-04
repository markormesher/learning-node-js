// modules can be simple values

var plainNumberModule = require('./plain-number-module');
console.log('Plain number module:');
console.log(plainNumberModule);
console.log('');

var plainStringModule = require('./plain-string-module');
console.log('Plain string module:');
console.log(plainStringModule);
console.log('');

// modules can contain multiple values

var basicModule = require('./basic-module');
console.log('Basic multi-value module:');
console.log(basicModule);
console.log('basicModule.func() ->');
basicModule.func();
console.log('');

// modules can come from JSON

var jsonModule = require('./json-module.json');
console.log('JSON module:');
console.log(jsonModule);
console.log('');

// modules can come from folders

var folderModule = require('./folder-module');
console.log('Folder module:');
console.log(folderModule);
console.log('folderModule.foo.print() ->');
folderModule.foo.print();
console.log('folderModule.bar.print() ->');
folderModule.bar.print();
console.log('');
