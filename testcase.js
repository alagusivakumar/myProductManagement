var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:8000");
/*var productDocument = {
  	 productId         : "_testId1",
     productName       : "pname",
     productDescription: "productDescription"
  }
// UNIT test begin
const querystring = require('querystring');
productDocument   = querystring.stringify(productDocument)
*/

//insert product test case

describe("Insert product test case",function(){

  // #1 should return home page
  var productDocument = {
  	 productId         : "_testId1",
     productName       : "pname",
     productDescription: "productDescription"
  }
// UNIT test begin
const querystring = require('querystring');
productDocument   = querystring.stringify(productDocument)

  it("should insert the document successfully ",function(done){

    // calling home page api
    server
    .post("/insertProduct")
    .send(productDocument)
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200)   
      var responseBody = JSON.parse(res.text)
      responseBody.message.should.equal("success")
      done();
    });
  });
  it("should return the bad request status",function(done){

    // calling home page api
    server
    .post("/insertProduct")
    .send(productDocument)
    .expect("Content-type",/json/)
    .expect(403) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(403)   
      done();
    });
  });

});


//update price test case

describe("update product price test case",function(){

  // #1 should return home page
  var productDocument = {
  	productId         : "_testId1",
  	productPrice      : 10000
  }
  const querystring = require('querystring');
  productDocument   = querystring.stringify(productDocument)
  it("should update the document successfully ",function(done){

    // calling home page api
    server
    .put("/updatePrice")
    .send(productDocument)
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200)
      done();
    });
  });
  
});



//Get product test case


describe("get product details test case",  function(){
 
   
  it("should get the document successfully ",function(done){

    // calling home page api
    server
    .get("/getProduct?productId=_testId1")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200)  
      var responseBody = JSON.parse(res.text)
      responseBody._id.should.equal("_testId1")
      responseBody.productName.should.equal("pname")
      responseBody.productDescription.should.equal("productDescription")
      done();
    });
  });

  
});

//delete the product

describe("delete product test case",function(){

  // #1 should return home page
  var productDocument = {
  	productId         : "_testId1"
  }
  const querystring = require('querystring');
  productDocument   = querystring.stringify(productDocument)
  it("should update the document successfully ",function(done){

    // calling home page api
    server
    .delete("/deleteProduct")
    .send(productDocument)
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200)
      done();
    });
  });
  
});
