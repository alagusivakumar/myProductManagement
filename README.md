# myProductManagement

This product management application can be used for CRUD operation on product. Mongo Db is used to store data. Since updating the product prize is more frequent action,Kafka is used as a messaging queue.It also includes a react js application for the UI.

Prerequisites
1. MonoDb 4.0
2. Node 12.18.3
3. Kafka 2.13-2.6.0

Configuration

1.MongoDb


host: localhost

port: 27017

database: product


2.kafka

host: localhost

port: 9092




HOW TO START SERVER?

In order to start the nodejs server , install the dependencies mentioned in the package.json using "npm install" and start the server using "node server.js". The server will run at localhost at port number 8000. Inorder to test the application , use "npm test" command

HOW TO START THE CONSOLE?

In order to start the react js application , go to the front end directory and start the console using "npm start" command . 

