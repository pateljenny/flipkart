import React from 'react';
import {
    Input,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, Card,Table
} from 'reactstrap';
import './Mycart.css';


class MyCart extends React.Component {
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
    render() {
        return (
            <div>
                <Navbar style={{ backgroundColor: "#000099" }} light expand="md">

                    <NavbarBrand href="/" style={{ color: "white" }}>flipkart</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Input type="search" placeholder="Search for products, brands and more" style={{ width: "450px", marginLeft: "100px" }}></Input><i className="material-icons" style={{ width: "20px", marginLeft: "-30px", color: "black" }}>search</i>
                    <Nav className="ml-auto" navbar >
                        <NavItem>
                            <NavLink href="/signin" style={{ color: "white" }}>SignIn</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/signup" style={{ color: "white" }}>SignUp</NavLink>
                        </NavItem>

                    </Nav>

                </Navbar>
                <div>

                    <Card className="container" style={{height:"330px"}} >

                        <Table>
                            <tr>
                                <h5>My Cart(0)</h5>
                            </tr>
                            <div className="col" >
                            <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/empty-cart_ee6141.png" height="200px" width="250px"></img>
                              <h5>Your Shopping Cart Is Empty</h5>
                            </div>
                        </Table>


                    </Card>

                </div>
            </div>

        );
    }
}

export default MyCart;