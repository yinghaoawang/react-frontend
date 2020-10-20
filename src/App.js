import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Home from './pages/Home';
import Admin from './pages/Admin';
import PrivateRoute from "./PrivateRoute";
import {AuthContext} from "./context/AuthContext";
import {ProductContext} from "./context/ProductContext";
import {CartContext} from './context/CartContext';
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ShoppingCart from './pages/ShoppingCart';
import Products from "./pages/Products";
import data from "./data";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const existingTokens = JSON.parse(localStorage.getItem("tokens"));
    this.state = {
      authTokens: existingTokens,
      cart: [],
      products: data,
      userRole: 0
    }
    this.setTokens = this.setTokens.bind(this);
    this.addItem = this.addItem.bind(this);
    this.isAdmin = this.isAdmin.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  isAdmin() {

    return false;
  }

  isLoggedIn() {
    return false;
  }

  setTokens(data) {
    if (typeof (data) == 'undefined') {
      localStorage.removeItem("tokens");
    } else {
      localStorage.setItem("tokens", JSON.stringify(data));
    }
  }

  addItem(item) {
    const cart = this.state.cart;
    cart.push(item);
    this.setState({cart});
  }

  render() {
    const { products, cart, authTokens } = this.state;
    const { addItem, setTokens, isAdmin, isLoggedIn } = this;
    return (
        <ProductContext.Provider value={{products}}>
          <CartContext.Provider value={{cart, addItem}}>

            <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens, isAdmin, isLoggedIn}}>
              <Router>
                <div>
                  <Navigation/>

                  <Route exact path="/" component={Home}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/signup" component={Signup}/>
                  <PrivateRoute path="/admin" component={Admin}/>

                  <Route path="/cart">
                    <ShoppingCart/>
                  </Route>
                  <Route exact path="/products">
                    <Products/>
                  </Route>

                </div>
              </Router>
            </AuthContext.Provider>

          </CartContext.Provider>
        </ProductContext.Provider>
    );
  }
};