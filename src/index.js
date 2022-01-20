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

import Signup from "./Components/signup"
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Provider store={store} >

        <App />
      </Provider>} >
      <Route
        index
        element={
         <Home />
        }
      />
        <Route path="home" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="cart" element={<Cart />} />
      
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
