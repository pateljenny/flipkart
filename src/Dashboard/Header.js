import React from 'react';
import {
  Input,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button, NavLink
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
  handlesubmitAddtocart = () => {
    this.props.history.push('/mycart');
  }

  handleSignInClick = () => {
    this.props.history.push('/signin');
  }
  handleSignUpClick = () => {
    this.props.history.push('/signup');
  }

  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "#000099" }} light expand="md">

          <NavbarBrand href="/#" ><img src="https://i.imgur.com/dqOEkud.png" style={{ height: "40px" }}></img></NavbarBrand>
         
          <NavbarToggler onClick={this.toggle} />
          <Input type="search" placeholder="Search for products, brands and more" style={{ width: "450px", marginLeft: "100px" }}></Input><i className="material-icons" style={{ width: "20px", marginLeft: "-47px", color: "black" }}>search</i>
          <Nav className="ml-auto" navbar >
          
            <Button onClick={this.handleSignInClick} style={{ color: "white", backgroundColor: "#000099", border: "2px #000099" }}>SignIn</Button>
           
            <Button onClick={this.handleSignUpClick} style={{ color: "white", backgroundColor: "#000099", border: "2px #000099" }}>SignUp</Button>
            
            <Button onClick={this.handlesubmitAddtocart} style={{ color: "white", backgroundColor: "#ffcc00", border: "2px #000099" }}><i className="material-icons">add_shopping_cart</i></Button>
            
          </Nav>

        </Navbar>
        <Droupdown></Droupdown>
      </div>

    );
  }
}

export default Header