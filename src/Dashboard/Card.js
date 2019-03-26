import React, { Component } from 'react'
import {Card, CardText,CardTitle, CardSubtitle, Button} from 'reactstrap';
import Add from './Add';


class Cards extends Component {
    

    
    render() {
        return (
            <div>
            <div >
                <Card body style={{ width: "900px", height: "90px", border: '2px white' }}>
                    <h5 style={{ marginLeft: "-550px" }}>Deals of the Day</h5>
                    <Button style={{ width: "100px", backgroundColor: "#000099", marginTop: "-15px", marginLeft: "1080px", textAlign: "center" }}>View All</Button>

                </Card>

                {/* <Card>
                    <div className="row">
                        <div className="column">
                            <img src="https://img0.junaroad.com/uiproducts/14862101/pri_175_p-1519291796.jpg" marginLeft="20px" alt="Snow" style={{ width: "130px", height: "140px" }} />
                            <CardTitle><h5>Casual Shirts, Jeans</h5></CardTitle>
                            <CardSubtitle style={{ color: "green" }}>From ₹149 + Extra 5% </CardSubtitle>
                            <CardText>Best Collection</CardText>

                        </div>
                        <div className="column">
                            <img src="http://www.kitavan.co.uk/images/kitavan/New-Nike-Cortez-Mens-Perfect-Cheap-Sale-[UK09].jpg" alt="Forest" style={{ width: "130px", height: "140px" }} />
                            <CardTitle> <h5>Puma</h5></CardTitle>
                            <CardSubtitle style={{ color: "green" }}>Upto 60%+Extra 5% Off </CardSubtitle>
                            <CardText>Men's Footwear</CardText>


                        </div>
                        <div className="column">
                            <img src="https://images-na.ssl-images-amazon.com/images/I/815VefcBIpL._SL1500_.jpg" alt="Mountains" style={{ width: "130px", height: "140px" }} />
                            <CardTitle><h5>Headphones & Speakers</h5></CardTitle>
                            <CardSubtitle style={{ color: "green" }}>From ₹ 299 </CardSubtitle>
                            <CardText>Philips, boAt & more</CardText>

                        </div>

                        <div className="column">
                            <img src="https://static-01.daraz.com.bd/original/40bb3b594663ea6f8b5c5e48d31cedbd.jpg" alt="Mountains" style={{ width: "130px", height: "140px" }} />
                            <CardTitle> <h5>Abrexo, Espoir, Timebre...</h5></CardTitle>
                            <CardSubtitle style={{ color: "green" }}>Upto70%+Extra15%Off </CardSubtitle>
                            <CardText>Watchese</CardText>

                        </div>



                    </div>
                </Card> */}

                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <img src="https://img0.junaroad.com/uiproducts/14862101/pri_175_p-1519291796.jpg" marginLeft="20px" alt="Snow" style={{ width: "130px", height: "140px" }} />
                                <CardTitle><h5>Casual Shirts, Jeans</h5></CardTitle>
                                <CardSubtitle style={{ color: "green" }}>From ₹149 + Extra 5% </CardSubtitle>
                                <CardText>Best Collection</CardText>
                            </div>
                            <div className="col-sm">
                                <img src="https://www.payless.com/on/demandware.static/-/Sites/default/dw70bbd860/images/slot/2019-SP01/2019-sp01-men-stan-right-basketball.gif" alt="Forest" style={{ width: "130px", height: "140px" }} />
                                <CardTitle> <h5>Puma</h5></CardTitle>
                                <CardSubtitle style={{ color: "green" }}>Upto 60%+Extra 5% Off </CardSubtitle>
                                <CardText>Men's Footwear</CardText>

                            </div>
                            <div className="col-sm">
                            <img src="https://static-01.daraz.com.bd/original/40bb3b594663ea6f8b5c5e48d31cedbd.jpg" alt="Mountains" style={{ width: "130px", height: "140px" }} />
                            <CardTitle> <h5>Abrexo, Espoir, Timebre...</h5></CardTitle>
                            <CardSubtitle style={{ color: "green" }}>Upto70%+Extra15%Off </CardSubtitle>
                            <CardText>Watchese</CardText>

                            </div>
                            <div className="col-sm">
                                <img src="https://uploads-ssl.webflow.com/59e7a84b511d6e0001982bfb/59ea16eb775aae00019a7738_thumbs_sony-mirrorless.jpg" alt="Mountains" style={{ width: "130px", height: "140px" }} />
                                <CardTitle> <h5>Abrexo, Espoir, Timebre...</h5></CardTitle>
                                <CardSubtitle style={{ color: "green" }}>Upto70%+Extra15%Off </CardSubtitle>
                                <CardText>Watchese</CardText>
                            </div>
                            <div className="col-sm">
                                <img src="https://images-na.ssl-images-amazon.com/images/I/815VefcBIpL._SL1500_.jpg" alt="Mountains" style={{ width: "130px", height: "140px" }} />
                                <CardTitle> <h5>Abrexo, Espoir, Timebre...</h5></CardTitle>
                                <CardSubtitle style={{ color: "green" }}>Upto70%+Extra15%Off </CardSubtitle>
                                <CardText>Watchese</CardText>
                            </div>

                            <div className="col-sm">
                                <img src="https://static3.nordic.pictures/1009523-thickbox_default/platinet-power-bank-20000mah-2xusb-black-grey-43111.jpg" alt="Mountains" style={{ width: "130px", height: "140px" }} />
                                <CardTitle> <h5>Abrexo, Espoir, Timebre...</h5></CardTitle>
                                <CardSubtitle style={{ color: "green" }}>Upto70%+Extra15%Off </CardSubtitle>
                                <CardText>Watchese</CardText>
                            </div>
                            {/* <div class="col-sm">
                                <img src="https://images-na.ssl-images-amazon.com/images/I/815VefcBIpL._SL1500_.jpg" alt="Mountains" style={{ width: "130px", height: "140px" }} />
                                <CardTitle> <h5>Abrexo, Espoir, Timebre...</h5></CardTitle>
                                <CardSubtitle style={{ color: "green" }}>Upto70%+Extra15%Off </CardSubtitle>
                                <CardText>Watchese</CardText>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <Add></Add>
            </div>
            
        )
    }
}

export default Cards;