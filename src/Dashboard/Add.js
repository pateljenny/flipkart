import React,{Component} from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
class Add extends  Component{
    render(){
        return(
            <div>
                <Card>
                <div>
                   
                        <div className="row">
                            <div className="col-sm">
                                <img src="http://www.aaneel.com/wp-content/uploads/2017/03/centinics-apps.jpg"  alt="Snow" style={{marginLeft:"10px",marginRight: "599px", width: "830px", height: "300px"}} />
                                <Button style={{marginRight:"590px",marginTop:"-139px",backgroundColor:"#00cc66"}}>Know More</Button>
                            </div>

                            <div className="col-sm">
                            <img src="https://economictimes.indiatimes.com/thumb/msid-65305945,width-565,height-410/microsoft-surface-book-2-and-surface-laptop-unboxing-first-impression.jpg"  alt="Snow" style={{marginLeft:"-619px", width: "630px", height: "300px"}} />
                                <Button style={{marginBottom:"-160px",marginLeft:"-150px"}}>Know More</Button>
                            </div>
                            {/* <div className="col-sm">
                            <img src="https://couponwish.in/wp-content/uploads/Flipkart-Marq-Offer-e1524412801281.png"  alt="Snow" style={{marginRight:"-100px", width: "430px", height: "300px"}} />
                                <Button style={{marginLeft:"-410px",marginBottom:"-160px",backgroundColor:"black"}}>Know More</Button>
                            </div> */}
                            
                            {/* <div class="col-sm">
                                <img src="https://www.payless.com/on/demandware.static/-/Sites/default/dw70bbd860/images/slot/2019-SP01/2019-sp01-men-stan-right-basketball.gif" alt="Forest" style={{ width: "130px", height: "140px" }} />
                                <CardTitle> <h5>Puma</h5></CardTitle>
                                <CardSubtitle style={{ color: "green" }}>Upto 60%+Extra 5% Off </CardSubtitle>
                                <CardText>Men's Footwear</CardText>

                            </div>
                            <div class="col-sm">
                            <img src="https://static-01.daraz.com.bd/original/40bb3b594663ea6f8b5c5e48d31cedbd.jpg" alt="Mountains" style={{ width: "130px", height: "140px" }} />
                            <CardTitle> <h5>Abrexo, Espoir, Timebre...</h5></CardTitle>
                            <CardSubtitle style={{ color: "green" }}>Upto70%+Extra15%Off </CardSubtitle>
                            <CardText>Watchese</CardText>

                            </div>
                            <div class="col-sm">
                                <img src="https://uploads-ssl.webflow.com/59e7a84b511d6e0001982bfb/59ea16eb775aae00019a7738_thumbs_sony-mirrorless.jpg" alt="Mountains" style={{ width: "130px", height: "140px" }} />
                                <CardTitle> <h5>Abrexo, Espoir, Timebre...</h5></CardTitle>
                                <CardSubtitle style={{ color: "green" }}>Upto70%+Extra15%Off </CardSubtitle>
                                <CardText>Watchese</CardText>
                            </div>
                            <div class="col-sm">
                                <img src="https://images-na.ssl-images-amazon.com/images/I/815VefcBIpL._SL1500_.jpg" alt="Mountains" style={{ width: "130px", height: "140px" }} />
                                <CardTitle> <h5>Abrexo, Espoir, Timebre...</h5></CardTitle>
                                <CardSubtitle style={{ color: "green" }}>Upto70%+Extra15%Off </CardSubtitle>
                                <CardText>Watchese</CardText>
                            </div>

                            <div class="col-sm">
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
                </Card>
            </div>
        )
    }
}
export default Add;