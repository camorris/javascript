// streams gives us a way to asynchronoulsy handle continuus data flows
//streams in NJS are implementations of underlying abstract extreme interface

var fs = require('fs');

var stream = fs.createReadStream("./chat.log", "UTF-8"); // this will create a readable file stream

var data = ""; // this variable will be used to concatenate all of the data chunks
stream.once ("data", function(){//this is a once listener 
    console.log("\n\n\n");// these are just leading spaces
    console.log("Started Reading File");// this will appear in the terminal to let us know its reading the file
    console.log("\n\n\n");
});
stream.on("data", function(chunk){

    process.stdout.write(` chuk: ${chunk.length} |`);// when a data event is raised this will display the length of each of these files. the pipe will seprate eeach of the data chunks
    data += chunk;
});

// this will read the files but this is not ideal for app with high traffic
fs.readFile("./chat.log", "UTF-8", function(err, chatlog){//this line code has the first argument that specifies what we will read. and the seocnd argument will specify we want to read it as text
    console.log(`File Read ${chatlog.length}`);

});

stream.on("end", function(){//this function will be invoked at the end of the function
    console.log("\n\n\n");// these are just leading spaces
    console.log(`Finished reading File ${data.length}`);// this will show us the length of variable we concatenated
    console.log("\n\n\n");
})