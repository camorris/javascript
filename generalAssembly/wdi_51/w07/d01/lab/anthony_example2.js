var fs = require('fs')

var text = fs.readFileSync('1.txt', 'utf-8')
//var characters = text.length

var array = text.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().split(' ')
//console.log(array)

function wordCount(array, what) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    console.log(what +": " + count);
}
//wordCount(array, "the")

function countEachWord(array){
    length = array.length - 1
    for (i = 0; i <= length; i += 1){
        if (array[i] !== '') {
            var word = array[i]
            wordCount(array, word)
        }

    }
    return;
}

console.log(countEachWord(array))
Add Comment