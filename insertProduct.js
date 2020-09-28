//mongo db connection

const { MongoClient } = require("mongodb");
const uri =
  "mongodb://localhost:27017/";

const client = new MongoClient(uri);
client.connect();  
 
// creating express router
var express       = require('express');  
var router        = express.Router(); 

router.post('/insertProduct', async (req, res,next) => { 

   // Inserting the Product
   var statusCode; 
   var productDocument = {
      _id                  : req.body.productId,
      productName          : req.body.productName,
      productDescription   : req.body.productDescription
   }

   res.setHeader('Access-Control-Allow-Origin', '*');

   try
   {
    await client.db("productDb").command({ ping: 1 });
    var database        = client.db('ProductDb');
    var collection      = database.collection('product');
   }
   catch(e)
   {
     var statusCode = 500
     var serverErrorMessage = "internal server error";
     res.status(statusCode);
     res.end(serverErrorMessage)
   }
   try
   {
     var result          = await collection.insertOne(productDocument); 
   }
   catch(e)
   {
     var statusCode = 403;
     var badRequestMessage = e;
     res.status(statusCode);
     res.end(JSON.stringify(badRequestMessage))
   }
   
   var response = {  
       message : 'success' 
   };   
   res.end(JSON.stringify(response));
})  

module.exports = router;