var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient(),
    consumer = new Consumer(
        client,
        [
            { topic: 'topic1', partition: 0 }
        ],
        {
            autoCommit: true
        }
    );


consumer.removeTopics(['topic1'], function (err, removed) {
	console.log(removed)
	console.log(err)
});