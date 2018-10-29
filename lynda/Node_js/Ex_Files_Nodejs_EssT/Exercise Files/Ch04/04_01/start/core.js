var path = require('path') // you can extend the path

console.log( path.basename(__filename) );
var dirUploads = path.join (__dirname, 'www','files', 'uploads')
console.log(dirUploads);

var util = require('util')// you can get timestamp 

util.log( path.basename(__filename) ); // this line of code uses the helper function util 
var dirUploads = path.join (__dirname, 'www','files', 'uploads')
util.log(dirUploads);

var v8 = require ('v8') // this will give you javaScript litereal of all of our memory usage statistics

util.log(v8.getHeapStatistics());


