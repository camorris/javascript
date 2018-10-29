const express = require('express')
const app = express()
const PORT = 3000

var moviesArr = ['T2', 'TMNT', 'It', 'Transporter']

app.post('/movies/:id', (req, res) => {
    moviesArr.push(req.params['id'])
    res.send(moviesArr)
} )






app.listen(PORT, ()=>{
    console.log('Server started on port', PORT)
})