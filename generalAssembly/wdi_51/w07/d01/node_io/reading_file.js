var fs = require('fs')
var myHaiku = fs.readFileSync('haiku.txt', 'utf-8')

console.log(myHaiku)
// console.log(fs) this will show what fs is made of 
// 
var fs = require('fs')
var luckyNumber = 5
var contents = `
<h1>Hello<h1>
${luckyNumber}`
fs.writeFileSync('haiku-report.html', contents)