import React, { Component } from 'react';
import './App.css';
// import SignIn from './SignIn/SignIn'
import Header from './Dashboard/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
    {/* <SignIn></SignIn> */}
      <Header></Header>
      </div>
    );
  }
}

export default App;
