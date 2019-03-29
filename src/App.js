import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Dashboard/Header'
// import SignIn from './SignIn/SignIn'
// import SignUp from './SignUp/SignUp'
// import Mycart from './Dashboard/MyCart'
// import XYX from './Dashboard/xyx'

class App extends Component {
  render() {
    return (
      <div>

        <Router>
          <Header />
          {/* <XYX></XYX> */}
      <Switch>
            {/* <Route path="/" component={SignIn} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/mycart' component={Mycart} /> */}
            
          </Switch> 
        </Router>

      </div>

    );
  }
}

export default App;