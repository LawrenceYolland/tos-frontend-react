import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class MenuBar extends Component {
  handleShowMenu = () => {
    if (!this.props.menuState) return;
    this.props.showMenu();
  };
  render() {
    const { user, showMenu } = this.props;
    // console.log("this is the current user => 👋", user.user_id);
    // const profilePath = `/users/${user.user_id}`;
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
          <span role="img" aria-label="Menu">
            <h1 className="burger-menu-icon">&#9776; </h1>
          </span>
        </NavLink>
      </div>
    );

    return <div className="header-icon-container">{menu}</div>;
  }
}

export default MenuBar;
