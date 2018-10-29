const
    express = require('express')
    app = express()
    PORT = 3000

var booksList = [{title: 'art of war'}, {title: 'cracking the coding interview'}, {title:'around the world in 80 days'}]

app.get('/', (req, res)=>{
    res.sendFile('client/index.html', {root: __dirname})
})
app.post('/books', (req,res)=>{
    booksList.push({title:'the shining'})
    res.json(booksList)
})
app.get('/books', (req,res)=>{
    res.json(booksList)
})
app.delete('/books', (req,res)=>{
    booksList.pop({})
    res.json(booksList)
})

app.listen(PORT, function(){
    console.log("Server started on Port", PORT)
})