import React, { Component } from 'react'
import './Carousel.css';
import Card from './Card';

class Carousel extends Component {

  render() {

    return (
      <div>

        <div className="row" style={{ marginLeft: "80px", width: "180%", marginTop: "-15px" }}>
          <div className=" col-md-6">
            <img className="d-block" src="http://www.ziptech.co.in/img/dell-slider-1.jpg" style={{ backgroundImage: "cover" }} alt="First slide" />
          </div>
          {/* <div className="col-sm-6">
    <img className="d-block" src="https://staging.mobileboxup.com.ng/wp-content/uploads/2018/01/phone.jpg" alt="First slide"/>
    </div> */}


        </div>
        <Card></Card>
      </div>

    )
  }
}

export default Carousel;