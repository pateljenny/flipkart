import React, { Component } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import * as categoryAction from './../Action/category';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Carousel from './Carousel';
import * as WomencategoryAction from './../Action/Women';

class Drop extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            modal: false,
            category: '',
            Womencategory:''
            
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    componentWillMount = () => {
        this.props.action.category.getCategory().then(()=>{
			// console.log(this.props.getCategory);
		});
    }
    componentWillMount = () => {
      this.props.action.Womencategory.getWomenCategory().then(()=>{
			console.log(this.props.getWomenCategory);
		});
    }
    
    render() {
        let Category = ''
     
        Category=this.props.getCategory.map((Category,key) =>{
            return <div className="category">{Category.Category_name}</div>
        })
        let WomenCategory = ''
        WomenCategory = this.props.getWomenCategory.map((WomenCategory,key)=>{
            return <div className="womencategory">{WomenCategory.Category_name}</div>
        })
        return (
            <div className="row">
                <Dropdown direction="down" isOpen={this.state.btnDropup} toggle={() => { this.setState({ btnDropup: !this.state.btnDropup }); }}>
                    <DropdownToggle caret style={{ backgroundColor: "white", color: "black", marginLeft: "100px", padding: "8px", border: "2px white" }}>
                        Electronics
                     </DropdownToggle>

                    <DropdownMenu>

                        <h6>{Category}</h6>
                        
                        
                    </DropdownMenu>
                </Dropdown>

                <Dropdown direction="down" isOpen={this.state.btnDropleft} toggle={() => { this.setState({ btnDropleft: !this.state.btnDropleft }); }}>
                    <DropdownToggle caret style={{ backgroundColor: "white", color: "black", marginLeft: "180px", padding: "8px", border: "2px white" }}>
                       Women
                 </DropdownToggle>
                    <DropdownMenu>
                        <h5>{WomenCategory}</h5>

                    </DropdownMenu>
                </Dropdown>

                {/* <Dropdown direction="down" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
                    <DropdownToggle caret style={{ backgroundColor: "white", color: "black", marginLeft: "180px", padding: "8px", border: "2px white" }}>
                        WoMen
                </DropdownToggle>
                    <DropdownMenu>
                        <h5>{this.category}</h5>

                    </DropdownMenu>
                </Dropdown> */}


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
            getWomenCategory:state.Womencategory

    }
};

const mapDispatchToProps = dispatch => ({
    action: {
        category: bindActionCreators(categoryAction, dispatch),
        Womencategory:bindActionCreators(WomencategoryAction,dispatch)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Drop)
