// in Node.js every javascript file is a module
//require only loads half the modules for JS
// the other half is module.exports

var Person = require('./lib/Person');
var ben = new Person("Ben Franklin");
var george = new Person("George Washington")

george.on('speak', function(said) {
	
		console.log(`${this.name} -> ${said}`);
	
	});

ben.on('speak', function(said) {

	console.log(`${this.name}: ${said}`);

});


ben.emit('speak', "You may delay, but time will not.");
george.emit('speak', "It is far better to be alone, than to be in bad company");
