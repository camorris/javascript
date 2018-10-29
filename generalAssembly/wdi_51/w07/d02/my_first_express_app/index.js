const express = require('express') // this makes sure we can use the npm on this file 
const app = express () // this app object is similar to routes in rails
const PORT = 3000 // this will make sure the numbers can stay the same you just type PORT
var badgesArr = ['Web Design', 'Python']
app.get('/badges', function(req, res){res.send('all badges')}) // this equivalent to rails routes
app.get ('/', function(req,res){res.send('Welcome to my home page')})
app.get('/user/badges', function(req,res){res.send('The user badges')})

// or you can use the new notation note the difference no more function just `=>`

app.get('/badges', (req, res)=>{res.send(badgesArr)}) // this equivalent to rails routes you will get all the badges

app.get('/badges/:id', (req,res)=> {
    res.send('You want badge number:' + req.params['id'])
})// this will give you a single badge

app.get ('/', (req,res)=>{res.send('Welcome to my home page')})

app.get('/user/badges', (req,res)=>{res.send('The user badges')})

app.post('/badges',(req,res) => {
    badgesArr.push('Ruby on Rails')
    res.send(badgesArr)
})

app.get('/change_name/:old/:new', (req,res) => {
    res.send ('old is: ' + req.params['old'] + ' new will be:'+ req.params['new'])
})



var mul = (a,b) => {return a *b}
mul(2,3)
// here is another example of the old notation and the new notation
var add = function(a,b) {
    return a + b
}

app.listen(PORT, ()=> {
    console.log('Server started on port', PORT) //the comma in between 3000 and port makes sure it printed in the same line
})//this will be the server location
