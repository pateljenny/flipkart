import React, { Component } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Carousel from './Carousel';

class Drop extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <div className="row">
                <Dropdown direction="down"  isOpen={this.state.btnDropup} toggle={() => { this.setState({ btnDropup: !this.state.btnDropup }); }}>
                    <DropdownToggle caret style={{ backgroundColor: "white", color: "black",marginLeft:"100px" ,padding:"8px",border:"2px white"}}>
                        Electronics
                     </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Mobile</DropdownItem>
                        <DropdownItem>Laptop</DropdownItem>
                        <DropdownItem>Camera</DropdownItem>
                        <DropdownItem>Mobile Accessories</DropdownItem>
                        <DropdownItem>Home Entertainment</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <Dropdown direction="down" isOpen={this.state.btnDropleft} toggle={() => { this.setState({ btnDropleft: !this.state.btnDropleft }); }}>
                    <DropdownToggle caret style={{ backgroundColor: "white", color: "black", marginLeft:"180px",padding:"8px",border:"2px white" }}>
                        TV's Appliances
                 </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Refigeratiors</DropdownItem>
                        <DropdownItem>Air Conditioners</DropdownItem>
                        <DropdownItem>Small Home Appliances</DropdownItem>
                        <DropdownItem>Kitch Appliances</DropdownItem>
                        <DropdownItem>WAshing Machine</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                {/* <Dropdown direction="down" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
                    <DropdownToggle caret style={{ backgroundColor: "white", color: "black",marginLeft:"100px" ,padding:"8px",margin:"9px",border:"2px white"}}>
                       Men
                </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Footwear</DropdownItem>
                        <DropdownItem>Watches</DropdownItem>
                        <DropdownItem>Sports Wear</DropdownItem>
                       
                    </DropdownMenu>
                </Dropdown> */}

                <Dropdown direction="down" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
                    <DropdownToggle caret style={{ backgroundColor: "white", color: "black",marginLeft:"180px" ,padding:"8px",border:"2px white"}}>
                      WoMen
                </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Jewellery</DropdownItem>
                        <DropdownItem>Shoes</DropdownItem>
                        <DropdownItem>Beauty-Grooming</DropdownItem>
                       
                    </DropdownMenu>
                </Dropdown>

                {/* <Dropdown direction="down" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
                    <DropdownToggle caret style={{ backgroundColor: "white", color: "black",marginLeft:"100px" ,padding:"8px",margin:"9px",border:"2px white"}}>
                     Sports,Books-More
                </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Books</DropdownItem>
                        <DropdownItem>Gaming</DropdownItem>
                        <DropdownItem>Music</DropdownItem>
                        <DropdownItem>Sports</DropdownItem>
                    </DropdownMenu>
                </Dropdown> */}
<div style={{padding:"22px"}}>
<Carousel></Carousel>
</div>    
            </div>
        )
    }
}

export default Drop;