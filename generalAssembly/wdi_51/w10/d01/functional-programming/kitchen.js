let kitchen = {
  lightsOn: true,
  sink: [
    {type: "Bowl", clean: false},
    {type: "Spoon", clean: false},
    {type: "Glass", clean: false},
  ],
  dishWasher: []
}

let pantry = {
  lightsOn: false,
},

function toggeLight(stateObj){
  return Object.assign({}, stateObj,{lightOn: !stateObj.lightsON})
}

function fillDishwasher(stateObj){
  return Object.assign({}, stateObj,{
sink: [],
dishWasher: [...stateOBj.dishWasher, ...stateObj.sink]//three take everything out of new array and pack it into oldarray
  })
}

function runDishwasher(stateObj){
  return Object.assign({}, stateOBj,{
    dishWasher: stateObj.dishWasher.map((dish)=>{
      return Object.assign({},dish, {clean: true})
    })
  })
}
/// below is the object spread syntax////////////////////////////////////////////////////////////////


function toggeLight(stateObj){
  return {...stateOBj, lightsOn: !stateObj.lightsOn}

function fillDishwasher(stateObj){
  return {
    ...stateOBj,
    sink: [],
    dishWasher: [...stateOBj.dishWasher, ...stateObj.sink]//three take everything out of new array and pack it into oldarray
  )
}

function runDishwasher(stateObj){
  return {
    ...stateObj,
    dishWasher: stateOBj.runDishwasher.map((dish)=> {
    return {...dish, clean: true}
  })
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////
console.log("Kitchen V1", kitchen)

console.log("toggling light...")
kitchen = toggleLights(kitchen)

console.log("Kitchen V2", kitchen)

console.log("Filling the dishwasher...")
kitchen = fillDishwasher(kitchen)

console.log("Kitchen V3", kitchen)

console.log("Running the dishwasher...")
kitchen = fillDishwasher(kitchen)


console.log("Can i see pantry", pantry)

console.log("toggling light...")
pantry = toggleLights(pantry)

let obj1 = {banana: "BOOM!"}
let obj2 = {...obj}
let ob3 = {...obj1, lightsOn }

