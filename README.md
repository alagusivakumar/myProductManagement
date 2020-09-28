# myProductManagement

This product management application can be used for CRUD operation on product. Mongo Db is used to store data. Since updating the product prize is more frequent action,Kafka is used as a messaging queue.

Prerequisites
1. MonoDb 4.0
2. Node 12.18.3
3. Kafka 2.13-2.6.0

Configuration

MongoDb


host: localhost

port: 27017

database: product


kafka

host: localhost

port: 9092

The node will run at localhost at port number 8000

