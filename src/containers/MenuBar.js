import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MenuBar extends Component {
  handleShowMenu = () => {
    if (!this.props.menuState) return;
    this.props.showMenu();
  };
  render() {
    const { showMenu, menuState } = this.props;
    const menuLogo = !menuState ? (
      <span className="icon-open" aria-label="Menu open">
        &#9776;
      </span>
    ) : (
      <span className="icon-closed" aria-label="Menu close">
        &times;
      </span>
    );
    const menu = (
      <NavLink
        className="burger-menu"
        onClick={showMenu}
        activeStyle={{
          fontWeight: "bold",
          color: "#a333c8"
        }}
      >
        {menuLogo}
      </NavLink>
    );

    return (
      <div id="header-icon-container">
        <h1 className="home-logo">TOS</h1>
        {menu}
      </div>
    );
  }
}

export default MenuBar;
