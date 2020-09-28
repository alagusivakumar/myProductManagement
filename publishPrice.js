module.exports.publishPrice = function(productId,productPrice)
{
  var kafka        = require('kafka-node')
  var Producer     = kafka.Producer
  var KeyedMessage = kafka.KeyedMessage
  var client       = new kafka.KafkaClient()
  var producer     = new Producer(client)
  var record       = new KeyedMessage(productId,productPrice) 
  var payloads     = [
        { 
          topic    : 'product', 
          messages :  record
        }
    ];
  producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
        if(err)
        {
        	return err;
        }	
        else
        {
            return data;
        }	
    });
});
 
producer.on('error', function (err) {return err}) 


}