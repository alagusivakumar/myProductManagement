//mongo db connection

const { MongoClient } = require("mongodb");
const uri =
  "mongodb://localhost:27017/";
const client = new MongoClient(uri);
client.connect();

// creating express router
var express       = require('express');  
var router        = express.Router(); 

router.get('/getProduct', async (req, res) => { 

   // Inserting the Product
		var query   = { _id: req.query.productId }; 
		res.setHeader('Access-Control-Allow-Origin', '*');

		try{  
				const database        = client.db('ProductDb');		
				const collection      = database.collection('product');
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
			var result   = await collection.findOne(query); 
		}		
		catch(e)
		{
	   var statusCode = 403;
     var badRequestMessage = e;
     res.status(statusCode);
     res.end(JSON.stringify(badRequestMessage))
		}


res.end(JSON.stringify(result));  
  
})  

module.exports = router;