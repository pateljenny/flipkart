import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


class Cards extends Component {
    render() {
        return (
            <div >
                <Card body style={{ width: "900px", height: "90px",border:'2px white' }}>
                    <h5 style={{ marginLeft: "-710px" }}>Deals of the Day</h5>
                    <Button style={{ width: "100px", backgroundColor: "#000099", marginTop: "-15px", marginLeft: "770px" ,textAlign:"center"}}>View All</Button>

                </Card>
                <div className="row">
                    <div className="col-sm-6">
                        <Card style={{ width: "200px",border:'2px white' }}>
                            <CardImg top style={{ width: "110px", height: "130px", marginLeft: "20px" }} src="https://img0.junaroad.com/uiproducts/14862101/pri_175_p-1519291796.jpg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Casual Shirts, Jeans</CardTitle>
                                <CardSubtitle style={{ color: "green" }}>From ₹149 + Extra 5% </CardSubtitle>
                                <CardText>Best Collection .</CardText>

                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="col-sm-6">
                    <Card style={{ width: "200px" ,border:'2px white'}}>
                        <CardImg top style={{ width: "110px", height: "130px", marginLeft: "20px" }} src="https://i.ebayimg.com/images/g/iqIAAOSwnDZUKYoh/s-l300.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Men-Shoes-Fashion-Spring-Autumn-Leather-</CardTitle>
                            <CardSubtitle style={{ color: "green" }}>Upto 60%+Extra 5% Off </CardSubtitle>
                            <CardText>Men's Footwear</CardText>

                        </CardBody>
                    </Card>
                </div>


            </div>
        )
    }
}

export default Cards;