import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import Header from './Dashboard/Header';
// import MyCart from './Dashboard/MyCart';
// import SignIn from './SignIn/SignIn';
// import SignUp from './SignUp/SignUp';
import MobileList from './Dashboard/Mobile/MobileList';
import store from './store'
// import MobileList from './Dashboard/Mobile/MobileList';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Header />
            {/* <MobileList></MobileList> */}
            <Switch>
              {/* <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              <Route path='/mycart' component={MyCart} />*/}
              <Route path='/mobile' component={MobileList} /> 
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
