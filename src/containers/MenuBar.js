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
      <div>
        <NavLink
          exact
          to="/"
          activeStyle={{
            fontWeight: "bold",
            color: "#f9009a"
          }}
          onClick={this.handleShowMenu}
          className="home-menu"
        >
          <span role="img" aria-label="Home">
            <h1> 🏠</h1>
          </span>
        </NavLink>
        <NavLink
          className="burger-menu"
          onClick={showMenu}
          activeStyle={{
            fontWeight: "bold",
            color: "#f9009a"
          }}
        >
          {menuLogo}
        </NavLink>
      </div>
    );

    return <div className="header-icon-container">{menu}</div>;
  }
}

export default MenuBar;
