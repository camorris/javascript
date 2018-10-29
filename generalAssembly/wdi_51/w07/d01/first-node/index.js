function squawk(){
    console.log("CAAAAWW!!!")
}
console.log (squawk)
// above will just show the function
console.log(squawk())
//this will call the function because of the parenthesese

// <--- write a function that takes a name, and prints a greeting with that name--->

var name = "Chase"

function greeting(){
    console.log("Hello" +  name + "How are you today?")
}

console.log(greeting())

// or 

function salute(name){
    console.log("Hello " + name + " welcome sir")
}

console.log(salute(Chase))

// write a function that calcualtes the area

function area(w,h){
    return w * h 
}
// using underscore module------
var geometry = require('./geometry.js')
var _ = require ('undersocre')
 console.log(geometry.area(2,3))
//  or
console.log(geometry.circumference(5,4))

var flavors = ['Oreo Cookie', 'Coffee', 'Reeses Peanut butter' ]
console.log(_.first(flavors))
// using intersection
var user1Favorites = ["kill bill", "civil war", "primal fear"]

var user2Favorites = ["kill bill", "spider-man", "thor"]

console.log(_.intersection(user1Favorites,user2Favorites))
// using chalk ----------------
var chalk = require('chalk')
var user1Favorites = ["kill bill", "civil war", "primal fear"]
var user2Favorites = ["kill bill", "spider-man", "thor"]
var intersection = _.intersection(user1Favorites,user2Favorites)

console.log(chalk.green(intersection))
// using moment ----------

var moment = require('moment')
var myDate = Date.parse('October 2, 2017, 6:00pm')
console.log(moment(myDate).fromNow())

// using validator ---------

var isItValid = require('validator')


console.log(validator.isEmail('cm1234@yahoo.com'))
console.log(validator.isCreditCard(''))

