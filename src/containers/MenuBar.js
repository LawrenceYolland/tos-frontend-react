import React, { Component } from "react";
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
    const menu =
      user.username === null ? (
        <div>
          <NavLink
            exact
            to="/signin"
            activeStyle={{
              fontWeight: "bold",
              color: "#f9009a"
            }}
            onClick={this.handleShowMenu}
          >
            Sign In
            <span role="img" aria-label="Sign In">
              👋
            </span>
          </NavLink>
          <NavLink
            exact
            to="/"
            activeStyle={{
              fontWeight: "bold",
              color: "#f9009a"
            }}
            onClick={this.handleShowMenu}
          >
            Home
            <span role="img" aria-label="Home">
              🏠
            </span>
          </NavLink>
          <NavLink
            exact
            to="/signup"
            activeStyle={{
              fontWeight: "bold",
              color: "#f9009a"
            }}
            onClick={this.handleShowMenu}
          >
            Sign Up
            <span role="img" aria-label="Sign Up">
              👋
            </span>
          </NavLink>
          <NavLink
            onClick={showMenu}
            activeStyle={{
              fontWeight: "bold",
              color: "#f9009a"
            }}
          >
            Menu
            <span role="img" aria-label="Menu">
              🍔
            </span>
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink
            onClick={() => {
              this.handleShowMenu();
              this.props.signOut();
            }}
            activeStyle={{
              fontWeight: "bold",
              color: "#f9009a"
            }}
          >
            Sign Out
            <span role="img" aria-label="Sign Out">
              👋
            </span>
          </NavLink>
          <NavLink
            exact
            to="/"
            activeStyle={{
              fontWeight: "bold",
              color: "#f9009a"
            }}
            onClick={this.handleShowMenu}
          >
            Home
            <span role="img" aria-label="Home">
              🏠
            </span>
          </NavLink>

          <NavLink
            exact
            // to={!!profilePath ? profilePath : "#"}
            to={"/papers"}
            activeStyle={{
              fontWeight: "bold",
              color: "#f9009a"
            }}
            onClick={this.handleShowMenu}
          >
            Papers
            <span role="img" aria-label="user profile">
              📖
            </span>
          </NavLink>
          <NavLink
            onClick={showMenu}
            activeStyle={{
              fontWeight: "bold",
              color: "#f9009a"
            }}
          >
            Menu
            <span role="img" aria-label="menu">
              🍔
            </span>
          </NavLink>
        </div>
      );
    return <header>{menu}</header>;
  }
}

export default MenuBar;
