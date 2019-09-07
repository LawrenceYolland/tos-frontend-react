import React, { Component, Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";

class Menu extends Component {
  state = {
    input: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { input } = this.state;
    const { history } = this.props;
    console.log("🔍 searching for things ...", input);
    // push state with ?query
    this.props.showMenu();
    history.push(`/papers/search/${input.split(" ").join("-")}`);
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  };

  render() {
    const { user } = this.props;
    const profilePath = `/users/${user.user_id}`;
    const view = (
      <div className="drop-menu">
        <ul id="menu">
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.input}
              type="text"
              placeholder="search papers ..."
              name="search"
              onChange={this.handleChange}
            />
          </form>
          <NavLink
            exact
            to="/"
            activeStyle={{
              fontWeight: "bold",
              color: "#f9009a"
            }}
            onClick={this.props.showMenu}
          >
            <li>
              Home
              <span role="img" aria-label="Home">
                🏠
              </span>
            </li>
          </NavLink>
          <NavLink
            to="/papers"
            activeStyle={{
              fontWeight: "bold",
              color: "#f9009a"
            }}
            onClick={this.props.showMenu}
          >
            <li>
              Papers
              <span role="img" aria-label="Papers">
                📖
              </span>
            </li>
          </NavLink>
          {user.user_id !== null ? (
            <Fragment>
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "#f9009a"
                }}
                onClick={() => {
                  this.props.showMenu();
                  this.props.signOut();
                }}
              >
                <li>
                  Sign Out
                  <span role="img" aria-label="Sign Out">
                    👋
                  </span>
                </li>
              </NavLink>
              <NavLink
                to={profilePath}
                activeStyle={{
                  fontWeight: "bold",
                  color: "#f9009a"
                }}
                onClick={this.props.showMenu}
              >
                <li>
                  Profile
                  <span role="img" aria-label="Profile">
                    👩‍🔬
                  </span>
                </li>
              </NavLink>
            </Fragment>
          ) : (
            <Fragment>
              <NavLink
                to="/signin"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#f9009a"
                }}
                onClick={() => {
                  this.props.showMenu();
                }}
              >
                <li>
                  Sign In
                  <span role="img" aria-label="Sign In">
                    👋
                  </span>
                </li>
              </NavLink>
              <NavLink
                to="/signup"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#f9009a"
                }}
                onClick={() => {
                  this.props.showMenu();
                }}
              >
                <li>
                  Sign Up
                  <span role="img" aria-label="Sign Up">
                    👋
                  </span>
                </li>
              </NavLink>
            </Fragment>
          )}
        </ul>
      </div>
    );
    return <Fragment>{view}</Fragment>;
  }
}

export default withRouter(Menu);
