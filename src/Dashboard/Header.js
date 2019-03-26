import React from 'react';
import {
  Input,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import Droupdown from './Dropdown';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  onClick = ()=>{
    this.props.history.push('/signin');
  }
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "#000099" }} light expand="md">

          <NavbarBrand href="/" style={{ color: "white" }}>flipkart</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Input type="search" placeholder="Search for products, brands and more" style={{ width: "450px", marginLeft: "100px" }}></Input><i className="material-icons" style={{ width: "20px", marginLeft: "-30px", color: "black" }}>search</i>
          <Nav className="ml-auto" navbar >
            <NavItem>
              <NavLink href="/signin" onClick={this.onClick}style={{ color: "white" }}>SignIn</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signup" style={{ color: "white" }}>SignUp</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/mobile" style={{ color: "white" }}><i className="material-icons">add_shopping_cart</i></NavLink>
            </NavItem>
          </Nav>

        </Navbar>
      <Droupdown></Droupdown>
      </div>

    );
  }
}

export default Header