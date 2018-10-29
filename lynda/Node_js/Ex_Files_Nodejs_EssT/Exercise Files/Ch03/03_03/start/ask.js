// These is an array of questions
var questions = [
"What is your name?",
"what is your fav hobby?",
"What is your fav program langauge?"
]
//this is an empty array called answers which allows us to input answers
var answers = [];
// this function is called ask which will called the questions and ask us to input something. however it will just ECHO our answer it will never prompt the next question
function ask(i){
    process.stdout.write(`\n\n\n\ ${questions[i]}`); // process.stdout.write will write out some spaces and the question we specifically ask for
    process.stdout.write('  >  ')// this will prompt us to write something
}
process.stdin.on('data',function(data){
process.stdout.write('\n' + data.toString().trim() + '\n'); //this will just echo the data we are prompted for 
});
ask(0);
//  this will go through each question and ask us for a answer then exit the app once all the questions have been asked
process.stdin.on('data',function(data) {
    answers.push(data.toString().trim()); //trim is a method that gets rid of white space

    if (answers.length < questions.length){
        ask(answers.length);
    } else {
        process.exit();
    }
});
//  This function will print out a sentence using the answers
    process.on('exit', function() {
        process.stdout.write('\n\n\n\n\n');
        process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]}`); // this will 
        process.stdout.write('\n\n\n\n\n');
    });

ask(0);


// process.stdout.write("Hello ");
// process.stdout.write('World \n\n\n\n')