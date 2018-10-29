
// 





var pokemonArray = [
    {name : "Charizard", weight: 900, height: 5.7, superPower: "Fire Blast"},
    {name : "Blastoise", weight: 800, height: 6, superPower: "Water Blast"},
    {name : "Pikachu", wieght: 1900, height: 3, superPower:" Lightning Blast"},
]
var $body = $('body')
var $list = $('<ul>')

// create the elements to display pokemon info
var $pokemonInfo = $('<div>')
var $name = $('<h1>')
var $weight = $('<h2>')
var $height = $('<h2>')
var $superPower = $('<h2>')
//  put  a name and wight iside of pokemon info
$pokemonInfo.append($name, $weight, $height, $superPower)
// put pokemon infor and list inside of body
$body.append($pokemonInfo, $list)


// my sad attempt at looping through the pokemonArray and for each pokemon,
// add a <li> to the $list which shows that pokemon's name
// $list.pokemonArray.addli('Charizard')
// $list.pokemonArray.addli('Blastoise')
// $list.pokemonArray.addli('Pikachu')

// this how it should be done
// for(var i = 0; i < pokemonArray.length; i += 1){
//     console.log(pokemonArray[i].name)
//     var name = pokemonArray[i].name
//     var $listItem = $('<li>').text(name)
//     $list.append($listItem)
// }

pokemonArray.forEach(function(p){
    var $listItem = $('<li>').text(p.name)

    $listItem.on('click', function() {
        $name.text(p.name)
        $weight.text("Weight: " + p.weight)
        $height.text("Height: " + p.height)
        $superPower.text("Super Power: " + p.superPower)
        
    })

    $list.append($listItem)
})
