import React from 'react';
import {Container,Row,Col,Nav,Navbar,Button} from 'react-bootstrap';
import ProductDescription from './productdescription.js'
import UpdatePrice from './updatePrice.js'
import DeleteProduct from './deleteProduct.js'
import GetProduct from './getProduct.js'
import 'bootstrap/dist/css/bootstrap.css';
export default class App extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      currentPage:"insertProduct"
    }
    this.changePageState      = this.changePageState.bind(this);
  }
  changePageState(event)
  {
    console.log("inside changePageState")
    console.log(event.target)
    console.log(event.target.name)
    this.setState({currentPage:event.target.name})
  }
  render()
  {
    var content = <ProductDescription />
    if(this.state.currentPage=="updatePrice")
    {
       content = <UpdatePrice />
    }
    else if(this.state.currentPage=="deleteProduct")
    {
      content = <DeleteProduct />
    }  
    else if(this.state.currentPage=="getProduct")
    {
      content = <GetProduct />
    }  
    else
    {
      content = <ProductDescription />
    } 

    return (
    <div>
     <Navbar>
      <Nav variant="tabs">
  <Nav.Item>
    <Button onClick={this.changePageState} name = "insertProduct">Set Product Description</Button>
  </Nav.Item>
  <Nav.Item >
    <Button onClick={this.changePageState} name="updatePrice" >Set Product Prize</Button>
  </Nav.Item>
  <Nav.Item >
    <Button onClick={this.changePageState} name="deleteProduct" >Delete Product</Button>
  </Nav.Item>
  <Nav.Item>
   <Button onClick={this.changePageState} name="getProduct" >Get Product details</Button>
  </Nav.Item>
</Nav>
</Navbar>
      
      <br/>
      <br/>
      
      
      {content}
     
  
    </div>
  );
  }
}


