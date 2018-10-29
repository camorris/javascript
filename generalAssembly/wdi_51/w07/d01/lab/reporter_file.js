var fs = require ('fs')
var myHaiku = fs.readFileSync('haiku.txt', 'utf-8')
console.log(myHaiku.split(''))
wordsArray = myHaiku.split(/\s/)

wordFrequency = {}

wordsArray.forEach(function(word){
 if (wordFrequency[word] !== undefined){
     
 }

})