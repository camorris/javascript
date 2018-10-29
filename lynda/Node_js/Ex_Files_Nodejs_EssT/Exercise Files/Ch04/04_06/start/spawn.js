//spwan is made for longer, ongoing processes with large amounts of data
var spawn = require ('child_process').spawn;//I am using child process with the function spawn

var cp = spawn ('node', ["alwaysTalking"]); //node is the argument we want to run first in the terminal and passed into the spawn function...while the second argument is an aarray of things we want to run after the node

cp.stdout.on("data", function(data){
    console.log(`STDOUT: ${data.toString()}`);//this just log the data into a string
});

    cp.on('close', function(){
        console.log("Child process has ended")
         process.exit()
    });

    setTimeout(function(){
        cp.stdin.write("stop");
    }, 4000);

