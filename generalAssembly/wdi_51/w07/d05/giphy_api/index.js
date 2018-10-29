const
    express = require ('express'),
    app = express(),
    logger = require('morgan'),
    PORT = 3000,
    httpClient = require ('request'),
    giphyApikey = 'hUBTjPuHewY4IHdIk0uawBe4xa87UN2l'


app.get('/test', (req,res)=> {
    var issAPIUrl = 'http://api.open-notify.org/iss-now.json'
    httpClient.get(issAPIUrl, (err, response, body)=> {
        var data = JSON.parse(body)
        console.log(data.iss_position.longitude)
        res.send(`<h1>Iss Position: ${data.iss_position.latitude}, ${data.iss_position.longitude}<h1>`)
    })
})

app.get('/reddit', (req, res) => {
        var redditAPIUrl = 'https://www.reddit.com/r/funny.json'
        httpClient.get(redditAPIUrl, (err, response, body) => {
            var data = JSON.parse(body)
            var latestTitle = data.data.children[0].data.title

    })
})
app.get ('/search', (req,res)=>{
    var apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=hUBTjPuHewY4IHdIk0uawBe4xa87UN2l&limit=25&offset=0&rating=G&lang=en&q=' + req.query.term
    httpClient.get(apiUrl, (err, response, body)=>{
        
        var data = JSON.parse(body)
        console.log(data)
        var firstImage = data.data[0]
        var imageUrl = firstImage.images.original.url
        res.send(`<img src= "${imageUrl}"/>`)
    
    })
})

app.get('/searchall', (req,res)=>{
    var apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=hUBTjPuHewY4IHdIk0uawBe4xa87UN2l&limit=25&offset=0&rating=G&lang=en&q=' + req.query.term
    httpClient.get(apiUrl, (err, response, body)=>{
        
        var data = JSON.parse(body)
        var results = ''
         for(var i = 0; i < data.data.length; i += 1) {
             var imageUrl = data.data[i].images.original.url
             var imgTag = `<img src= "${imageUrl}"/>`
             results += imgTag
         }
         res.send(results)
         })

})
app.get('/random', (req,res) => {
    var apiUrl = 'https://api.giphy.com/v1/gifs/random?api_key=hUBTjPuHewY4IHdIk0uawBe4xa87UN2l&tag=&rating=R'
    httpClient.get(apiUrl, (err, response, body)=> {
        var data = JSON.parse(body)
        console.log(data)
        var imgUrl = data.data.image_url
        console.log(imgUrl)
        res.send(`<img src="${imgUrl}"/>`)
    })
})
app.listen(PORT, (err)=> {
    console.log(err || `server running on ${PORT}👏🏾`)
})