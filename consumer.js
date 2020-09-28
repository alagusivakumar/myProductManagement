//mongo db connection



module.exports.consumePrice =  function()
{
  const { MongoClient } = require("mongodb");
const uri =
  "mongodb://localhost:27017/";

    const client = new MongoClient(uri);
    client.connect();
	  var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    kafkaclient = new kafka.KafkaClient(),
    consumer = new Consumer(
        kafkaclient,
        [
            { topic: 'product'}
        ]
    );

  consumer.on('message', async function (message) {
    if(message)
    {
       const database        = client.db('ProductDb');
       const collection      = database.collection('product');  
       var filter            = { _id: message.key };
       var  updateDoc = {
      $set: {
        price:message.value
       }
      };

      var result = await collection.updateOne(filter, updateDoc);
      return result; 
    }
    
});    

}