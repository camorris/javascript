// streams gives us a way to asynchronoulsy handle continuus data flows
//streams in NJS are implementations of underlying abstract extreme interface
var questions = [
  "What is your name?",
  "What is your fav hobby?",
  "What is your preferred programming language?"
];

var answers = [];

function ask(i) {
  process.stdout.write(`\n\n\n\n ${questions[i]}`);//process.stdout is really just a writeable stream. where we send data chunks to it using the write metho
  process.stdout.write("  >  ");
}

process.stdin.on('data', function(data) {//implements a readable stream to listen for 

	answers.push(data.toString().trim());

	if (answers.length < questions.length) {
		ask(answers.length);
	} else {
		process.exit();
	}

});

process.on('exit', function() {

	process.stdout.write("\n\n\n\n");

	process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`);

	process.stdout.write("\n\n\n\n");

});

ask(0);

