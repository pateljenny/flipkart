import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import CheckoutContainer from './components/Checkout/CheckoutContainer';
import StylesContainer from './components/Styles/StylesContainer';
import ProductsContainer from './components/Products/ProductsContainer';
import SingleProductContainer from './components/Products/SingleProductContainer';
import OneClickCheckout from './components/Checkout/OneClickCheckout';
import OrderConfirmationContainer from './components/Orders/OrderConfirmationContainer';
import NotFound from './components/global/NotFound';
// import MobileNav from './global/Mobile/MobileNav';
import Footer from './components/global/Footer';

const App = props => (
  <div>
    {/* <MobileNav /> */}

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/styles" component={StylesContainer} />
      <Route path="/products" component={ProductsContainer} />
      <Route path="/checkout" component={CheckoutContainer} />
      <Route
        path="/order-confirmation"
        component={OrderConfirmationContainer}
      />
      <Route path="/product/:id" component={SingleProductContainer} />
      <Route
        path="/one-click-checkout/:productId"
        component={OneClickCheckout}
      />
      <Route path="*" component={NotFound} />
    </Switch>

    <Footer />
  </div>
);

export default App;