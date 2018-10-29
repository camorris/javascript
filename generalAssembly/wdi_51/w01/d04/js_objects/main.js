var person1 = {
    age: 31,
    food: "pizza",
    drink: "coke",
    backpack: {folder: 2, pencil: 3, pen: 20},
    sayHello: function() { console.log("hello") },
    bestFriend: person2
}

var person2 = {
    age: 42,
    food: "burger",
    drink: "beer",
    backpack: {folder: 6, pencil: 7, pen: 1}
}

var person3 = {
    age: 26,
    food: "sushi",
    drink: "water",
    backpack: {folder: 13, pencil: 9, pen: 0}
}
person1.bestFriend = person2
person2.bestFriend = person1
 var people = [person1, person2, person3]
    var totalPencil = 0
    for(var i = 0; i < people.length; i += 1) {
        totalPencil += people[i].backpack.pencil
    }
    console.log("Total Pencil: " + totalPencil)