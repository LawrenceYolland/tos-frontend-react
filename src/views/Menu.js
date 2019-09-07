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
      <Fragment>
        <div className="drop-menu-overlay"></div>
        <div className="drop-menu">
          <div id="menu">
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
                color: "#f9009a",
                backgroundColor: "white"
              }}
              onClick={this.props.showMenu}
            >
              Home
              <span className="left-moji">🏠</span>
            </NavLink>
            <NavLink
              to="/papers"
              activeStyle={{
                color: "#f9009a",
                backgroundColor: "white"
              }}
              onClick={this.props.showMenu}
            >
              Papers
              <span className="right-moji">📖</span>
            </NavLink>
            {user.user_id !== null ? (
              <Fragment>
                <NavLink
                  to={profilePath}
                  activeStyle={{
                    color: "#f9009a",
                    backgroundColor: "white"
                  }}
                  onClick={this.props.showMenu}
                >
                  Profile
                  <span className="left-moji">👩‍🔬</span>
                </NavLink>
                <NavLink
                  activeStyle={{
                    color: "#f9009a",
                    backgroundColor: "white"
                  }}
                  onClick={() => {
                    this.props.showMenu();
                    this.props.signOut();
                  }}
                >
                  Sign Out
                  <span className="right-moji">👋</span>
                </NavLink>
              </Fragment>
            ) : (
              <Fragment>
                <NavLink
                  to="/signin"
                  activeStyle={{
                    color: "#f9009a",
                    backgroundColor: "white"
                  }}
                  onClick={() => {
                    this.props.showMenu();
                  }}
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/signup"
                  activeStyle={{
                    color: "#f9009a",
                    backgroundColor: "white"
                  }}
                  onClick={() => {
                    this.props.showMenu();
                  }}
                >
                  Sign Up
                </NavLink>
              </Fragment>
            )}
          </div>
        </div>
      </Fragment>
    );
    return <Fragment>{view}</Fragment>;
  }
}

export default withRouter(Menu);
