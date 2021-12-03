import React, { Component } from "react";
import { Link } from "react-router-dom";
import {IoFastFoodOutline}from 'react-icons/io5'
import SignIn from "./Signin"
export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="homepage">
        <div className="intro text-center">
          <h2>Quán ăn Việt </h2>
          <p>
            Trong văn hóa Việt Nam, ăn uống là cả một nghệ thuật, nó không chỉ
            nhằm đáp ứng yêu cầu cơ bản của con người mà còn có mối quan hệ mật
            thiết đến lối sống, truyền thống dân tộc, được thể hiện rất rõ qua
            những dụng cụ được dùng trong bữa ăn, cách ứng xử với mọi người
            trong khi ăn.
          </p>
          <Link className="nav-link link-info active" to="/product">See Product<IoFastFoodOutline /></Link>
        </div>
       <div className="SignIn"><SignIn /></div>

      </div>
    );
  }
}
