import React from 'react';
import {Alert,Form,Button,Container} from 'react-bootstrap';
import {callApi} from './callApi.js'
import 'bootstrap/dist/css/bootstrap.css';
import './productdescription.css'
export default class ProductDescription extends React.Component
{
	constructor(props)
	{
       super(props);
       this.state = {
       	 isInputsSet:false,
         isResponseUpdated:false
       };
       this.productId          = "";
       this.productName 	     = "";
       this.productDescription = "";
       this.response           = {};
       this.onChandeHandler    = this.onChandeHandler.bind(this);
       this.submitHandler      = this.submitHandler.bind(this);
	}
	async componentDidUpdate()
	{

    var method        = 'POST'
    var path          = '/insertProduct' 
      if(this.state.isInputsSet)
      {
      	var requestBody = {
     productId         : this.productId,
     productName       : this.productName,
     productDescription: this.productDescription
        }

      var result    = await callApi(method,path,requestBody); 
      result        = JSON.stringify(result)
      this.response = JSON.parse(result)
      this.setState({isInputsSet:false},()=>{
        this.setState({isResponseUpdated:true})
      }) 

     }     
	}
  displayStatus()
  {
    var status = "";
    if(this.state.isResponseUpdated)
    {
     status = ( <Alert variant="primary">Status Code:{this.response.statusCode}</Alert>)
    }  
    return status;
  }
	onChandeHandler(event)
	{
		console.log(event)
      switch(event.target.name)
      {
        case "ProductId":
              this.productId      = event.target.value;
              break;
      	case "ProductName":
      				this.productName 		= event.target.value;
      				break;
      	case "ProductDescription":
      	            this.productDescription	= event.target.value;
      	            break;		
      }
	}
	submitHandler()
	{
		this.setState({isInputsSet:true});
	}
	render()
	{
    var status = this.displayStatus()
		return(
			<Form  className="form">
  <Form.Group>
    <Form.Label>Product Id</Form.Label>
    <Form.Control  name="ProductId" type="text" onChange={this.onChandeHandler} />
  </Form.Group>    
  <Form.Group>
    <Form.Label>Product Name</Form.Label>
    <Form.Control  name="ProductName" type="text" onChange={this.onChandeHandler} />
  </Form.Group>

  <Form.Group controlId="ProductDescription">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" name = "ProductDescription" onChange={this.onChandeHandler} rows={3}  />
  </Form.Group>
  <Button variant="primary" onClick={this.submitHandler}>Submit</Button>
  <br/>
  <br/>
  {status}
</Form>
		);
	}
}