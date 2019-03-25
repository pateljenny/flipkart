import React, { Component } from 'react'
import Validation from 'react-validation';

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            Password: '',
            ConfrimPassword: '',
            gender: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault()
        var data = {
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Email: this.state.Email,
            Password: this.state.Password,
            ConfrimPassword: this.state.ConfrimPassword,
            gender: this.state.gender,
        }
        console.log(data)
        fetch("/users/new", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (data) {
            console.log(data)
            if (data == "success") {
                this.setState({ msg: "Thanks for registering" });
            }
        }).catch(function (err) {
            console.log(err)
        });
    }
    logChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {

        return (
            <div >
                
                    <Validation.components.Form onSubmit={this.handleSubmit} method="POST">
                        <label>FirstName</label>
                        <Validation.components.Input onChange={this.logChange} className="form-control" value='' placeholder='cool' name='fname' validations={['required']} />
                        <label>LastName</label>
                        <Validation.components.Input onChange={this.logChange} className="form-control" value='' placeholder='surname' name='lname' validations={['required', 'email']} />
                        <label>Email</label>
                        <Validation.components.Input onChange={this.logChange} className="form-control" value='' placeholder='cool@play.com' name='email' validations={['required']} />
                        <label>Password</label>
                        <Validation.components.Input onChange={this.logChange} className="form-control" value='' placeholder='dont ask' name='pwd' validations={['required', 'email']} />
                        <label>ConfrimPassword</label>
                        <Validation.components.Input onChange={this.logChange} className="form-control" value='' placeholder='same above' name='cpwd' validations={['required']} />
                        <label>Gender</label>
                        <Validation.components.Input onChange={this.logChange} className="form-control" value='' placeholder='Female' name='gender' validations={['required', 'email']} />
                        <div className="submit-section">
                            <Validation.components.Button className="btn btn-uth-submit">Submit</Validation.components.Button>
                        </div>
                    </Validation.components.Form>
                
            </div>
        )
    }
}

export default SignUp;