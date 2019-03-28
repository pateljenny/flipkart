import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Header from './Dashboard/Header'
// import Signup from './SignUp/SignUp'
import Login from './SignIn/SignIn'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header></Header>
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