//mongo db connection

const { MongoClient } = require("mongodb");
const uri =
  "mongodb://localhost:27017/";

const client = new MongoClient(uri);
client.connect();

// creating express router
var express       = require('express');  
var router        = express.Router(); 

router.delete('/deleteProduct', async (req, res) => { 

   // deleting the record
   var productDocument  = {
      _id            : req.body.productId
   }
   res.setHeader('Access-Control-Allow-Origin', '*');

   try
   {
    var database     = client.db('ProductDb');
    var collection   = database.collection('product');
   }
   catch(e)
   {
     var statusCode = 500
     var serverErrorMessage = "internal server error";
     res.status(statusCode);
     res.end(serverErrorMessage)
   }
   
   try{
     var  result = await collection.deleteOne(productDocument);
   }
   catch
   {
     var statusCode = 403;
     var badRequestMessage = e;
     res.status(statusCode);
     res.end(JSON.stringify(badRequestMessage))
   }
   
 
   var response = {  
       status : 'success' 
   };   
  
   res.end(JSON.stringify(response));  
   
}) 

module.exports = router;