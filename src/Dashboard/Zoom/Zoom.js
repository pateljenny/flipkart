import React, { Component } from 'react';
import ReactImageZoom from 'react-image-zoom';
import './Zoom.css';

const props1 = {
    width: 400,
    scale: 1.5,
    img: 'http://www.aljanh.net/data/archive/img/2989547220.jpeg',
    offset: {vertical: 0, horizontal: 10},
};

const props2 = {
    width: 400,
    height: 250,
    zoomWidth: 500,
    img: 'http://www.aljanh.net/data/archive/img/2989547220.jpeg',
    offset: {vertical: 0, horizontal: 10},
};

const props3 = {
    width: 400,
    height: 250,
    zoomWidth: 500,
    img: 'http://www.aljanh.net/data/archive/img/2989547220.jpeg',
    offset: {vertical: 0, horizontal: 10},
    zoomStyle: 'opacity: 0.5;border: 1px solid black;',
};


const props4 = {
    width: 400,
    height: 250,
    zoomWidth: 500,
    img: 'http://www.aljanh.net/data/archive/img/2989547220.jpeg',
    offset: {vertical: 0, horizontal: 10},
    zoomLensStyle: 'opacity: 0.5;background-color: gray;',
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
                    <h2>{`props: ${JSON.stringify(this.state.zoomProps)}`}</h2>
                    <div style={{display: 'flex', marginBottom: 10}}>
                        <button onClick={this.setZoomProps(props1)} style={{marginRight: 10}}>
                            props1
                        </button>
                        <button onClick={this.setZoomProps(props2)} style={{marginRight: 10}}>
                            props2
                        </button>
                        <button onClick={this.setZoomProps(props3)} style={{marginRight: 10}}>
                            props3
                        </button>
                        <button onClick={this.setZoomProps(props4)} style={{marginRight: 10}}>
                            props4
                        </button>
                    </div>
                    <ReactImageZoom ref={this.getZoomRef} {...this.state.zoomProps} />
                </div>
            </div>
        );
    }
}

export default ReactImageZoomExample