import React, { Component } from 'react';
import ReactImageZoom from 'react-image-zoom';
import {Button} from 'reactstrap'
import './Zoom.css';

const props1 = {
    width: 520,
    scale: 1.5,
    img: 'http://www.4usky.com/data/out/22/164178884-country-wallpapers.png',
    offset: {vertical: 0, horizontal: 50},
};

const props2 = {
    width: 520,
    height: 350,
    zoomWidth: 500,
    img: 'http://www.4usky.com/data/out/22/164178884-country-wallpapers.png',
    offset: {vertical: 0, horizontal: 50},
};

const props3 = {
    width: 400,
    height: 250,
    zoomWidth: 500,
    img: 'http://www.4usky.com/data/out/22/164178884-country-wallpapers.png',
    offset: {vertical: 0, horizontal: 50},
    zoomStyle: 'opacity: 1.20;border: 1px solid black;',
};


const props4 = {
    width: 400,
    height: 250,
    zoomWidth: 500,
    img: 'http://www.4usky.com/data/out/22/164178884-country-wallpapers.png',
    offset: {vertical: 0, horizontal: 50},
    zoomLensStyle: 'opacity: 1.20;background-color: gray;',
};


class ReactImageZoomExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zoomProps: props1,
        };
        this.zoomRef = null;
    }

    getZoomRef = (ref) => { this.zoomRef = ref; };

    setZoomProps = (props) => () => {
        this.setState({zoomProps: props});
    };

    render() {
        return (
            <div>
                <div>
                    {/* <h2>{`props: ${JSON.stringify(this.state.zoomProps)}`}</h2> */}
                    <div style={{display: 'flex', marginBottom: 10}}>
                        {/* <button onClick={this.setZoomProps(props1)} style={{marginRight: 10}}>
                            props1
                        </button> */}
                        {/* <button onClick={this.setZoomProps(props2)} style={{marginRight: 10}}>
                            props2
                        </button> */}
                        {/* <button onClick={this.setZoomProps(props3)} style={{marginRight: 10}}>
                            props3
                        </button>
                        <button onClick={this.setZoomProps(props4)} style={{marginRight: 10}}>
                            props4
                        </button> */}
                    </div>
                    <ReactImageZoom ref={this.getZoomRef} {...this.state.zoomProps} />
                </div>
                <div>
                    <Button style={{height:"50px",width:"170px",backgroundColor:"#ff9900",color:"white"}}><i class="material-icons">local_grocery_store</i>Add To Cart</Button> &nbsp; &nbsp; &nbsp;  &nbsp;
                    <Button style={{height:"50px",width:"150px",backgroundColor:"#ff3300",color:"white"}}><i class="material-icons">flash_on</i>Buy Now</Button>
                </div>
            </div>
        );
    }
}

export default ReactImageZoomExample