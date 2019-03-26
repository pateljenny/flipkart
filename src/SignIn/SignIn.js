import React, { Component } from 'react'
import './SignIn.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.submituserLoginForm = this.submituserLoginForm.bind(this);

    };

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    submituserLoginForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
          
            fields["Email"] = "";
            fields["Password"] = "";
            this.setState({ fields: fields });
            alert("Form submitted");
        }

    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

       
        if (!fields["Email"]) {
            formIsValid = false;
            errors["Email"] = "*Please enter your email-ID.";
        }

        if (typeof fields["Email"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["Email"])) {
                formIsValid = false;
                errors["Email"] = "*Please enter valid email-ID.";
            }
        }

        
      

        if (!fields["Password"]) {
            formIsValid = false;
            errors["Password"] = "*Please enter your password.";
        }

        if (typeof fields["Password"] !== "undefined") {
            if (!fields["Password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["Password"] = "*Please enter secure and strong password.";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;


    }




    render() {

        return (
            <div id="main-registration-container">
                <div id="register">
                    <h4 style={{textAlign:"center",color:"#000066"}}>Login</h4>
                    <form method="post" name="userLoginForm" onSubmit={this.submituserLoginForm} >
                       
                        <label><i className="material-icons">email</i></label>
                        <input type="text" name="Email" placeholder="cool@play.com"value={this.state.fields.emailid} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.emailid}</div>
                        <label><i className="material-icons">vpn_key</i></label>
                        <input type="password" name="Password" placeholder="don't ask" value={this.state.fields.password} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.password}</div>
                        <input type="submit" className="button" value="SignIn" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;