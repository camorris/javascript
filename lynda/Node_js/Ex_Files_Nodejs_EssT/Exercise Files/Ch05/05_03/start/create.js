//the file system module aka fs has the ability to create new files, to write text or binary content or to append text
var fs = require('fs');
//this is just a mark down text used with back ticks
var md = `
Sample Markdown Title
=====================

Sample subtitle
---------------
* point
* point
* point

`;
// this is how you use file system writeFile method
fs.writeFile("sample.md", md.trim(), function(){
    console.log("File Created")
});