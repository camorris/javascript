//FS module also gives us the ability to work with directories

var fs = require("fs");
//fs.exists uses this method to make sure there is no other file or directory created
if (fs.existsSync("lib")){
    console.log('Directory already there');
} else {
fs.mkdir("lib", function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Directory Created")
    }
})