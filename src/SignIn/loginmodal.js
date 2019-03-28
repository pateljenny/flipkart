import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form } from 'reactstrap';
import './SignIn.css';
class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}<i class="material-icons">face</i></Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Login Here</ModalHeader>
                    <ModalBody>
                    <div id="main-registration-container">
                <div id="register">
                    {/* <h4 style={{textAlign:"center",color:"#000066"}}>Login</h4> */}
                    <Form method="post" name="userLoginForm" onSubmit={this.submituserLoginForm} >
                       
                        <label><i className="material-icons">email</i></label>
                        <input type="text" name="Email" placeholder="cool@play.com"/>
                        <div className="errorMsg"></div>
                        <label><i className="material-icons">vpn_key</i></label>
                        <input type="password" name="Password" placeholder="don't ask" />
                        <div className="errorMsg"></div>
                        <input type="submit" className="button" value="SignIn" />
                    </Form>
                </div>
            </div>
                    </ModalBody>
                    {/* <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter> */}
                </Modal>
            </div>
        );
    }
}

export default ModalExample;