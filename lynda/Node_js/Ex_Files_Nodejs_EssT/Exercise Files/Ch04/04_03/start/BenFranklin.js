var events = require ('events');

var emitter = new events.EventEmitter();//event emitter is a constructor



emitter.on('customEvent', function(message, status) {
    console.log(`${status}: ${message}`);
});

emitter.emit('customEvent', "Hello world", 200);//will fire our first event...first argument is the event name the second is message from the call back function and the third is status
//<------------------------------>
var EventEmitter = require ('events').EventEmitter; //This is pulling that constructor function EventEmitter out of the events module
var util = require ('util')//it has an inheritance function which will allow us to add a object to the prototype of an existing object
var Person = function(name){ // this is creating an object called ` Person `
    this.name = name; //in this constructor function we are creating name value
    };

util.inherits(Person, EventEmitter); 

var ben = new Person("Ben Franklin");

ben.on('speak', function(said){
    console.log(`${this.name}: ${said}`)
});

ben.emit('speak',"YOu may delay, but time will not")