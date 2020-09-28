// creating express router
var express       = require('express');  
var router        = express.Router(); 
var publisher     = require('./publishPrice.js')
router.put('/updatePrice', async (req, res) => { 

   // publishing the price
   publisher.publishPrice(req.body.productId,req.body.productPrice)
   var response = {  
       status : 'success' 
   };   
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.end(JSON.stringify(response));  
  
})  

module.exports = router;