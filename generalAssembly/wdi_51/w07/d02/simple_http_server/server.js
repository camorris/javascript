var http = require ('http')

// this function will allow line 5 to display in the terminal when we go to the server described on line 20
function listener(request,response){
    console.log ('somebody wants something'),
    console.log(request.url)
    console.log(request.method)
    response.end('Good luck')
}
// or you can create this function which will allo the browser to print whatever you type in the URL.
// in this example you would have to run this file in the terminal first then  type localhost:3000/chase secondin order to get HI chase in the browser
function listener(request,response){
    console.log ('somebody wants something'),
    console.log(request.url)
    console.log(request.method)
    response.end(`Hi ${request.url}`) //
}
var server = http.createServer(listener)

server.listen(3000)