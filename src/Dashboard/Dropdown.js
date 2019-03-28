import React, { Component } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import * as categoryAction from './../Action/category';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Carousel from './Carousel';

class Drop extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            modal: false,
            category: '',
            data: ''
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    componentWillMount = () => {
      
        this.props.action.category.getCategory();
        console.log(this.category);
    }
    render() {
        return (
            <div className="row">
                <Dropdown direction="down" isOpen={this.state.btnDropup} toggle={() => { this.setState({ btnDropup: !this.state.btnDropup }); }}>
                    <DropdownToggle caret style={{ backgroundColor: "white", color: "black", marginLeft: "100px", padding: "8px", border: "2px white" }}>
                        Electronics
                     </DropdownToggle>

                    <DropdownMenu>

                        <h5>{this.category}</h5>
                        {/* <NavLink href="/MobileList">Mobile</NavLink>
                        <DropdownItem> <NavLink href="/MobileList"></NavLink>Mobile</DropdownItem>
                        <DropdownItem>Laptop</DropdownItem>
                        <DropdownItem>Camera</DropdownItem>
                        <DropdownItem>Mobile Accessories</DropdownItem>
                        <DropdownItem>Home Entertainment</DropdownItem> */}
                    </DropdownMenu>
                </Dropdown>

                <Dropdown direction="down" isOpen={this.state.btnDropleft} toggle={() => { this.setState({ btnDropleft: !this.state.btnDropleft }); }}>
                    <DropdownToggle caret style={{ backgroundColor: "white", color: "black", marginLeft: "180px", padding: "8px", border: "2px white" }}>
                        TV's Appliances
                 </DropdownToggle>
                    <DropdownMenu>
                        <h5>{this.category}</h5>

                    </DropdownMenu>
                </Dropdown>

                <Dropdown direction="down" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
                    <DropdownToggle caret style={{ backgroundColor: "white", color: "black", marginLeft: "180px", padding: "8px", border: "2px white" }}>
                        WoMen
                </DropdownToggle>
                    <DropdownMenu>
                        <h5>{this.category}</h5>

                    </DropdownMenu>
                </Dropdown>


                <div style={{ padding: "22px" }}>
                    <Carousel></Carousel>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
            getCategory: state.category,
    }
};

const mapDispatchToProps = dispatch => ({
    action: {
        category: bindActionCreators(categoryAction, dispatch)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Drop)
