var readline = require ('readline')

var rl = readline.createInterface(process.stdin, process.stdout); // readline is going to control these objects for us asking questions and collecting info so that i have to control process.stdin and process.stdout directly
 var realPerson = {
     name: '',
     sayings: []
 };


rl.question ("What is the name of a real person?", function (answer){
    realPerson.name = answer;
    rl.setPrompt(`What would ${realPerson.name}say?`);// this will set the prompt in the terminal

    rl.prompt();// this is going to display the prompt asking out user a question
    rl.on('line', function(saying){
        realPerson.sayings.push(saying.trim());
        if (saying.toLowerCase().trim()=== 'exit'){
            rl.close();
        }
        rl.setPrompt(`What else would ${realPerson.name}... say? ('exit' to leave)`); //this will prompt the user to type in another saying
        
        rl.prompt();
    });


});

rl.on('close', function(){ // this is the set up for a listener on the close event
    console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings) // %s is just a placeholder for a string %j will replace saying with JSON string
    process.exit()
})