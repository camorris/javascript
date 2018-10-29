console.log("script linked!")

//////////////////////////////
//          STEP 1          //
//////////////////////////////
   
// First build two objects 'mom' and 'dad' as object literals (e.g. 'var mom = {}'). If you have a non-traditional family structure, just use someone everybody loves, like Joe Biden or Oprah.
var dad = {}
var mom = {}





// uncomment these console.logs after you write your code
console.log('mom object after step 1:', mom)
console.log('dad object after step 1:', dad)

//////////////////////////////
//          STEP 2          //
//////////////////////////////

// Create one Physicality object and one Personality object for each parent (e.g. 'mom.physicality = {}' and 'mom.personality = {}').

mom.personality = {}
mom.physicality = {}
dad.personality = {}
dad.physicality = {}



// dadPersonality:{happy: true, wise: true, supportive: true, depressed: false, vegan: false},
// dadPhysicality:{hair: "bald", gender: "male", eyeColor: "brown", age: 57, weight:200}




// uncomment these console.logs after you write your code
console.log('mom object after step 2:', mom)
console.log('dad object after step 2:', dad)

//////////////////////////////
//          STEP 3          //
//////////////////////////////

// Using different data types (Number, String, Array, Object, Null, & Boolean), add **5 physical attributes** to each of your parents.


mom.physicality = {hair: "black" , gender: "female", eyeColor: "brown", age: 50, weight:160, allergies: undefined, } 
dad.physicality = {hair: "bald", gender: "male", eyeColor: "brown", age: 57, weight:200, allergies: null}
 




// uncomment these console.logs after you write your code
console.log('mom object after step 3:', mom)
console.log('dad object after step 3:', dad)

//////////////////////////////
//          STEP 4          //
//////////////////////////////

// Do the same with the personality object!
mom.personality = { happy: true,  wise: "yes",  supportive: true, depressed: null, vegan: undefined}
dad.personality = {happy: true, wise: "yes", supportive: true, depressed: "depends", vegan: false}






// uncomment these console.logs after you write your code
console.log('mom object after step 4:', mom)
console.log('dad object after step 4:', dad)

//////////////////////////////
//          STEP 5          //
//////////////////////////////

// Now build yourself by referencing physical and personality attributes from your folks!

// chase = {}
// chase.personality = {}
// chase.physicality = {}
// chase.personality = {happy: false, wise: false, supportive: false, depressed: false, vegan: true}
// chase.physicality = {hair: "black", gender: "male", eyeColor: "brown", age: 23, weight: 200}

//when saying REFERENCING that means do this

var chase = {
    personality: {
        happy: mom.personality.happy,
        wise: dad.personality.wise,
        supportive: dad.personality.supportive,

},

physicality: {
    age: dad.physicality.age / 2,
    hair: dad.physicality.hair,
    weight: dad.physicality.weight,}
},





// uncomment this console.log after you write your code
//  console.log('me object after step 5:', chase)

//////////////////////////////
// //          STEP 6          //
// //////////////////////////////

// // Make 2 lists: first, what you're good at, and second, what you're bad at.
chase.GoodAt = ["sleeping", "eating", "biking", "showering"]
chase.BadAt = ["tennis", "stairs", "lying", "running"]




// // uncomment this console.log after you write your code
// console.log('me object after step 6:', chase)

// //////////////////////////////
// //          STEP 7          //
// //////////////////////////////

// // Age yourself.

 chase.physicality.age = chase.physicality.age+1




// // uncomment this console.log after you write your code
//  console.log('me object after step 7:', chase)

// //////////////////////////////
// //          STEP 8          //
// //////////////////////////////

// // Delete half of the things you were good at.

chase.GoodAt.splice(0, 2)




// // uncomment this console.log after you write your code
//  console.log('me object after step 8:', chase)

// //////////////////////////////
// //          STEP 9          //
// //////////////////////////////

// // Age yourself (again).

// chase.physicality.age = chase.physicality.age+1




// // uncomment this console.log after you write your code
// console.log('me object after step 9:', chase)

// //////////////////////////////
// //          STEP 10         //
// //////////////////////////////

// // Add 'sitting' to the things you're good at and remove everything else from the list.

chase.GoodAt.push('sitting')
chase.GoodAt.splice(0, chase.GoodAt.length - 1)





// // uncomment this console.log after you write your code
// // console.log('me object after step 10:', me)

// //////////////////////////////
// //          STEP 11         //
// //////////////////////////////

// // Add 5 more things to the list of things you're bad at.
 chase.BadAt.push('cleaning', 'skipping', 'drinking', 'chess', 'crying')




// // uncomment this console.log after you write your code
//  console.log('me object after step 11:', chase)

// //////////////////////////////
// //           BONUS          //
// //////////////////////////////

// // Create a method that prints out one of your classic sayings!

chase.quote = function(){console.log("You have to create habitual achievments; sacrifices empowers.")
// }

// // call your function :)