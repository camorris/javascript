var text = fs.readFileSync('1.txt', 'utf-8')
//var characters = text.length

var array = text.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().split(' ')



function toObject(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; ++i){
      if (arr[i] === ' ') continue; // go to next iteration if true
      if (obj[arr[i]] !== undefined) {
          obj[arr[i]] += 1
      }else {
          obj[arr[i]] = 1
      }
    }
    return obj;
  }

  console.log(toObject(array))