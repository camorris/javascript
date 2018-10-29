const 
    express = require('express')
    app = express()
    http = require ('http')
    httpServer = http.Server(app)
    socketio = require ('socket.io')
    WS_Server = socketio(httpServer)
    PORT = 3000


app.get('/', (req, res)=>{
    res.sendFile('client/index.html', {root:__dirname})
})


WS_Server.on('connection', (socket)=>{
    console.log('a user connected')
    // console.log(socket)
    socket.on('change-color',(data)=>{
        console.log(data)
        WS_Server.emit('change-bg-color', data)
        // socket.emit('thanks', 'your server is thankful')
        //in the console you type socket.on('smile', function{})
        
    })

    socket.on('mouse-moved', (data)=>{
        console.log(data)
        WS_Server.emit('coordinates', data)
    })

    socket.on('clear-canvas', (data)=>{
        WS_Server.emit('boolean')
    })
})


httpServer.listen(PORT, function(){
    console.log('server started on port:', PORT)
})