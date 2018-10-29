var fs = require('fs')
var path = require('path');
fs.readdir(".lib", function(err, files){//this uses readdir method in fs that reads contents of a directory. files is the name of array
    files.forEach(function(fileName){
        var file = path.join(__dirname, "lib", fileName);
        var stats = fs.statSync(file);//uses the method statSync
        if (sats.isFile() && fileName !== ".DS_Store"){
            fs.readFile(file, "UTF-8", function(err, contents){
                console.log(contents);
            });
        }
    });
});

//or you can read the files this way
 fs.readFile("./lib/sayings.md", "UTF-8", function(err, contents){
   if (err) {
       console.log(err);
   }
    console.log(contents);
 });

