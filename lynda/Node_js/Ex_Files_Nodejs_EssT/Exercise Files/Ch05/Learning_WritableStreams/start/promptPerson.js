// writeable streams is used to write the data chunks that are going to be read

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");

var realPerson = {
	name: '',
	sayings: []
};


rl.question("What is the name of a real person? ", function(answer) {

	realPerson.name = answer;
	var stream = fs.createWriteStream(realPerson.name + ".md")
	stream.write(`${realPerson.name}\n================\n\n`);
		


});


rl.on('close', function() {

	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
	process.exit();

});
