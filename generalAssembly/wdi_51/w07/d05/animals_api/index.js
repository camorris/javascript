const 
    express = require ('express'),
    app = express(),
    PORT = 3000

var animals = [
    {name: "panther", color: "black", x: 20, y: 20, w: 10, h: 10},
    {name: "lion", color: "yellow", x: 25, y: 25, w: 15, h: 15},
    {name: "dolphin", color: "blue", x: 30, y: 30, w: 20, h: 20},
    {name: "tiger", color: "orange", x: 35, y: 35, w: 25, h: 25},
    {name: "gorilla", color :"silver", x: 40, y: 40, w: 30, h: 30}

]
app.get('/', (req, res)=>{
    res.sendFile('animals_app.html', {root: __dirname})
})
app.get('/animals', (req,res)=>{
    res.json(animals)

})


app.listen(PORT, ()=>console.log("👍🏾 Server started onport:", PORT))
