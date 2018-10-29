// in this file we are going to list the contents of the lib direcctory
//node.js comes with a module that allows us to interact with the file system
//its call the fs module

var fs = require ('fs')

//this is reading the lib file synchronously
// var files = fs.readdirSync('./lib')
fs.readdir('./lib', function(err, files){
    if (err){
        throw err;
    }
    console.log(files);
});


console.log("reading files");