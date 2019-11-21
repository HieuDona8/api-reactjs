import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <a className="navbar-brand">Call API</a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a>Trabg Chủ</a>
          </li>
          <li>
            <a>Quản Lý Sản Phẩm</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
