var fs = require ('fs')
var wc = require ('word-count')
const Freq = require('wordfrequenter')

// we should put each text into array
var txt001 = fs.readFileSync('001.txt', 'utf-8')
var thistxt001 = txt001.split(' ')
// console.log(txt001)
// console.log(wc(txt001))
//  or


console.log ("word count" + thistxt001.length)
console.log('character count ' + txt001.length)
  
const wf = new Freq(txt001.split(' '))
console.log(wf)

contents = `
`

fs.writeFileSync('001-report.html', contents)