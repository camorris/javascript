var fs = require("fs")
// this will try to unlink the specified file
try{
    fs.unlinkSync("./lib/config.json");
} catch(err) {
    console.log(err);
}
// this will remove the notes.md file
fs.unlink("notes.md", function(err){
    if (err){
        console.log(err);
    } else {
        console.log("Notes.md removed");
    }
});