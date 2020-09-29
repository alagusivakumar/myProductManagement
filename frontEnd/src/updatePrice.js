import React from 'react';
import {Alert,Form,Button,Container} from 'react-bootstrap';
import {callApi} from './callApi.js'
import 'bootstrap/dist/css/bootstrap.css';
import './productdescription.css'
export default class UpdatePrice extends React.Component
{
	constructor(props)
	{
       super(props);
       this.state = {
       	 isInputsSet:false
       };
       this.productId          = "";
       this.productPrice 	     = "";
       this.onChandeHandler    = this.onChandeHandler.bind(this);
       this.submitHandler      = this.submitHandler.bind(this);
	}
	async componentDidUpdate()
	{

    var method        = 'PUT'
    var path          = '/updatePrice' 
    if(this.state.isInputsSet)
    {
      	var requestBody = {
     productId         : this.productId,
     productPrice       : this.productPrice
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
      	case "ProductPrice":
               this.productPrice  = event.target.value;
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
    <Form.Label>Product Price</Form.Label>
    <Form.Control  name="ProductPrice" type="text" onChange={this.onChandeHandler} />
  </Form.Group>
  <Button variant="primary" onClick={this.submitHandler}>Submit</Button>
  <br/>
  <br/>
  {status}
</Form>
		);
	}
}