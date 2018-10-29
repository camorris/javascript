var fs = require("fs"); // this will bring in the module file system
fs.renameSync("./assets/logs", "./logs")// this will move a directory
console.log("moved Directory");

fs.rmdir("./assets", function(err){//this function will remove a directory and log an error if it does not
    if (err){
        throw err;// throwin an error will cause our program to crash
    }
    console.log("Assets Directory Removed");
});

fs.readdirSync("./logs").forEach(function(fileName) { // here we are going to read all the files in the directory and use Javascript array function which will invoked once for every file in the directory

    fs.unlinkSync("./logs/" + fileName);// this will unsync all the files in the logs folder
});

fs.rmdir("./logs", function(err){//this function will remove the directory or otherwise throw an error
    if(err){
        throw err;//throwing an error will cause our program to crash
    }
    console.log("Console Log Directory Removed");
    });