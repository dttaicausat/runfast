import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import Nav from './Components/Nav';
import './App.css'; 

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div >
      <Nav />
 
      </div>

    )
  };

}