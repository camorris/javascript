// Child process module  which allows you to execute external processes in your environment
//my Node.js app can run and communicate with other applications on the computer that it is hosting

var exec = require ('child_process').exec;

exec("open http://www.linkedin.com") //this will the website from the app

exec("open -a Terminal")// this will open the terminal because I am using the exec function

exec("ls", function(err, stdout){
    if (err) {
        throw err; // this is how we throw an error
    }
    console.log ("Listing Finished");

    console.log(stdout);
    
})

exec("git version", function(err, stdout){
    if (err) {
        throw err;
    }
    console.log ("Git version executed");

    console.log(stdout);
    
})