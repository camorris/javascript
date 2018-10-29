const request = require('request')
const cheerio = require('cheerio')


var url = 'https://losangeles.craigslist.org/lgb/mcy/d/1995-harley-davidson-dyna/6343851203.html'

request(url, (err, response, body)=> {
  if(err) console.error(err)
  var $ = cheerio.load(body)
  // console.log(body)
  var results = $('.crumb category')
  console.log(results)
  var resultsList = $('#crumb')
  resultsList.each(i,el)=>{
    console.log(i + " : " )

  }
  
})