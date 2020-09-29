import React from 'react';
import {Form,Button,Container,Table} from 'react-bootstrap';
import {callApi} from './callApi2.js'
import 'bootstrap/dist/css/bootstrap.css';
import './productdescription.css'
export default class GetProduct extends React.Component
{
	constructor(props)
	{
       super(props);
       this.state = {
       	 isInputsSet:false,
         isResponseUpdated:false

       };
       this.productId          = "";
       this.productDetails     = {};
       this.onChandeHandler    = this.onChandeHandler.bind(this);
       this.submitHandler      = this.submitHandler.bind(this);
       this.displayTable       = this.displayTable.bind(this);
	}
	async componentDidUpdate()
	{

    var method        = 'GET'
    var path          = '/getProduct?productId='+this.productId 
    if(this.state.isInputsSet)
    {
      	var requestBody = {
     productId         : this.productId
     }

      var result = await callApi(method,path,requestBody);  
      result = JSON.stringify(result)
      result = JSON.parse(result)
      var productDocument = JSON.parse(result.body)
      this.productDetails = productDocument
      this.setState({isInputsSet:false},()=>{
        this.setState({isResponseUpdated:true})
      })
     }
          
	}
  displayTable()
  {
    
    var productId = this.productDetails._id
    var result = ( <div>
      <Table>
       <thead>
       <tr>
        <th>Product Id</th>
        <th>Product Name</th>
        <th>Product Description</th>
        <th>Product Price</th>
        </tr>
       </thead>
        <tbody>
           <tr>
             <td>{this.productDetails._id}</td>
             <td>{this.productDetails.productName}</td>
             <td>{this.productDetails.productDescription}</td>
             <td>{this.productDetails.price}</td>
           </tr> 
        </tbody>
      </Table>
      </div>);

    if(this.state.isResponseUpdated)
    {
      return result
    }  
    else
    {
      return "";
    }  
    
  }
	onChandeHandler(event)
	{
		console.log(event)
      switch(event.target.name)
      {
        case "ProductId":
              this.productId      = event.target.value;
              break;
      				 
      }
	}
	submitHandler()
	{
		this.setState({isInputsSet:true});
	}
	render()
	{
    var result = this.displayTable()
		return(
      <div>
			<Form  className="form">
  <Form.Group>
    <Form.Label>Product Id</Form.Label>
    <Form.Control  name="ProductId" type="text" onChange={this.onChandeHandler} />
  </Form.Group>    
  <Button variant="primary" onClick={this.submitHandler}>Submit</Button>
</Form>
<br/>
<br/>
{result}
</div>
		);
	}
}