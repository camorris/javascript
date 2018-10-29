var fs = require("fs");

fs.renameSync("./lib/project-config.js", "./lib/config.json");//first argument is what we want to rename  and the second is the new  name

console.log("Config json file renamed");

fs.rename("./lib/notes.md", "./notes.md", function(err){
    if (err){
        console.log(err);
    } else {
        console.log("notes.md moved successfully")
    }
});