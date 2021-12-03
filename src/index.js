import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/HomePage';
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./Components/Cart";
import Product from './Components/Product';
import App from './App';
import SignIn from "./Components/Signin";
import Signup from "./Components/signup"
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Provider store={store} >

        <App />
      </Provider>} >
        <Route path="home" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="user" element={<SignIn />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
