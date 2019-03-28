import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Header from './Dashboard/Header'
// import Signup from './SignUp/SignUp'
import Login from './SignIn/SignIn'
// import Modal from './SignIn/loginmodal';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header></Header>
          {/* <Modal></Modal> */}
          {/* <Route exact path="/" component={Header} /> */}
          {/* <Route exact path="/signup" component={Signup} /> */}
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/dashboard" component={Header} /> */}

        </div>
      </Router>
    );
  }
}

export default App;