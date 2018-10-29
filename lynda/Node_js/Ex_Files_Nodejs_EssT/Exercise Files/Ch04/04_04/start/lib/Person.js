//with module.export because it is a javascript object we can use it like any javascript object to
//bracket notate, dot notate, set it to an object literal 

var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name) {
	this.name = name;
};

util.inherits(Person, EventEmitter);

module.exports = Person;//here i am setting module.export to our Person constructor function. module exports is the object that isretuned by the require statement