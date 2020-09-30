// creating express server
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var cors       = require('cors')
//using body parser
app.use(
  express.urlencoded({
    extended: false
  })
)

//enabling CORS
app.use(cors())

//initializating the routers
insertProduct = require('./insertProduct.js')
deleteProduct = require('./deleteProduct.js')
updatePrice   = require('./updatePrice.js')
getProduct    = require('./getProduct.js')

app.post('/insertProduct', insertProduct)  
app.delete('/deleteProduct', deleteProduct)  
app.put('/updatePrice', updatePrice)
app.get('/getProduct',getProduct)

//running the kafkha consumer
const consumer = require('./consumer.js')
consumer.consumePrice();



//starting the server
const server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("server listening at http://"+host+":"+port);  
})  

