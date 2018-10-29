// the http module will be used for creating web servers
//which will allow us to make requests and handle responses
var https = require ("https");
var fs = require ("fs")

var options = {
    hostname: "en.wikipedia.org",//this is the site we will be going to 
    port: 443, // this is the port for wikipedia
    path: "/wiki/Barack_Obama",// this is how tell wikipedia what we wnant to look up
    method: "GET"// this is the type of request we will be making
}

var req = https.request(options, function(res){

    var responseBody = "";
// this will receive all the data chunks and cancatenate all of that data
    console.log("response from server started");
    console.log(`Server Status: ${res.statusCode}`);//this will give the http response server code 
    console.log("Response Headers: %j", res.headers);

    res.setEncoding("UTF-8");
    rs.once("data", function(chunk){
        console.log(chunk);
    });

    res.on("data", function(chunk){
        console.log(`--chunk-- ${chunk.length}`);
        responseBody += chunk;
    });
    res.on("end", function(){

        fs.writeFile("george-washington.html", responseBody, function(err){
            if (err) {
                throw err;
            }
            console.log("File Downloaded");
        });
    });
});

req.on("error", function (err){
    console.log(`problem with request: ${err.message}`);

});
req.end();