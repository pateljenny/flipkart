import React, { Component } from 'react'
import './Carousel.css';
import Card from './Card';

class Carousel extends Component {

  render() {

    return (
     
<div class="row" style={{marginLeft:"50px",width:"180%"}}>
    <div class=" col-md-6" style={{}}>
    <img className="d-block" src="https://applepc.com.my/uploads/banner102.png" alt="First slide"/>
    </div>
    <div class="col-sm-6" style={{}}>
    <img className="d-block" src="http://247computers.in/shop/wp-content/uploads/2016/12/phones-banner.jpg" alt="First slide"/>
    </div>
    <Card></Card>
</div>

)
  }
}

export default Carousel;