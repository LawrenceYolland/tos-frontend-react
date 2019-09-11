import React, { Component, Fragment } from "react";

import "./App.css";
import { withRouter } from "react-router-dom";
import API from "./adapters/API";
import MenuBar from "./containers/MenuBar";
import Menu from "./views/Menu";
import moment from "moment";

import CreateRoutes from "./containers/Routing";
import FooterBar from "./containers/FooterBar";

class App extends Component {
  state = {
    user: {
      username: null,
      user_id: null,
      usertype: null,
      bio: null
    },
    loggingUser: false,
    userPapers: [],
    allPapers: [],
    menu: false,
    formError: false,
    allUsers: [],
    updatingRating: false
  };

  componentDidMount() {
    console.log("App has mounted ... 🌈");
    API.validateUser().then(user => {
      console.log("who dis? 🤷‍", user);
      if (user.user) {
        this.setState({
          user: {
            username: user.user.data.attributes.username,
            user_id: user.user.data.attributes.id,
            usertype: user.user.data.attributes.usertype
              ? "Researcher"
              : "Peer",
            bio: user.user.data.attributes.bio
          }
        });
        user.user.data.attributes.papers.map(paper =>
          this.setState({
            userPapers: [...this.state.userPapers, paper]
          })
        );
      }
    });
    API.fetchAllUsers().then(data => {
      data.data.map(user => {
        return this.setState({
          allUsers: [
            ...this.state.allUsers,
            {
              id: user.attributes.id,
              username: user.attributes.username
            }
          ]
        });
      });
    });
    API.fetchAllPapers().then(data => {
      data.data.map(paper => {
        // debugger
        return this.setState({
          allPapers: [
            ...this.state.allPapers,
            {
              id: paper.attributes.id,
              user_id: paper.attributes.user.id,
              title: paper.attributes.title,
              abstract: paper.attributes.abstract,
              doi: paper.attributes.doi,
              category: paper.attributes.category,
              rating: paper.attributes.rating,
              reviewCount: paper.attributes.reviews.length,
              created_at: paper.attributes.created_at
            }
          ]
          // allPaperIDs: [...this.state.allPaperIDs, paper.id] // will grab ids from paper object in refactor
        });
      });
    });
  }

  validateUserForm = user => {
    return user.username.trim().length >= 1 && user.password.trim().length >= 3
      ? true
      : false;
  };

  validatePaperForm = paper => {
    console.log("posting this paper ... 🤓", paper);
    return paper.title.trim().length > 1 &&
      paper.abstract.trim().length >= 10 &&
      paper.category.trim().length >= 0
      ? true
      : false;
  };

  submitSignUp = user => {
    console.log("user object => during sign up 🤓");
    if (this.validateUserForm(user)) {
      console.log("signing up ... 🤓", user);
      this.setState({
        loggingUser: true
      });
      API.signUpUser(user).then(user => {
        if (user.data !== null) {
          setTimeout(() => {
            this.setState({
              loggingUser: false,
              user: {
                username: user.data.attributes.username,
                user_id: user.data.attributes.id,
                usertype: user.data.attributes.usertype ? "Researcher" : "Peer",
                bio: user.data.attributes.bio
              }
            });
            console.log("here are the props => 🎁", this.props);
            this.props.history.push("/"); // takes user back to the 🏠 page
          }, 1000);
        } else {
          console.log("user not valid 🤦‍ 🚑");
          this.setState({
            loggingUser: false // return an alert when sign in fails validation step - use the error handler on back end
          });
        }
      });
    }
  };

  submitSignIn = user => {
    if (this.validateUserForm(user)) {
      console.log("signing in ... 🤓");
      this.setState({
        loggingUser: true
      });
      API.signInUser(user).then(u => {
        console.log("who is this user??? 🐛", u);
        setTimeout(() => {
          this.setState({
            loggingUser: false,
            user: {
              username: u.data.attributes.username,
              user_id: u.data.attributes.id,
              usertype: u.data.attributes.usertype ? "Researcher" : "Peer",
              bio: u.data.attributes.bio
            }
          });
          console.log("here are the props => 🎁", this.props);
          this.props.history.push("/"); // takes user back to the 🏠 page
        }, 1000);
      });
    } else {
      console.log("failed to sign in");
      // return an alert when sign in fails validation step - use the error handler on back end
    }
  };

  signOut = () => {
    console.log("signing out ... 👋", this.props);
    this.props.history.push("/");
    API.clearToken();
    this.setState({
      user: {
        username: null,
        user_id: null,
        bio: null,
        usertype: null
      }
    });
  };

  updateBio = patchData => {
    console.log("new bio 📨", patchData);
    const bioObject = {
      bio: patchData.bio,
      username: patchData.username
    };
    API.updateUser(bioObject, patchData.id).then(user => {
      this.setState({
        user: { ...this.state.user, bio: user.user.data.attributes.bio }
      });
    });
  };

  userPostsPaper = paper => {
    console.log("posting paper ... 🧻", paper);

    // if (this.validatePaperForm(paper)) {
    console.log("posting paper ... 🤓");
    //   this.setState({
    //     loggingUser: true
    //   });
    API.postPaper(paper).then(paper => {
      console.log("posting paper ... 🧻", paper);

      setTimeout(() => {
        this.setState({
          loggingUser: false,
          allPapers: [
            ...this.state.allPapers,
            {
              id: paper.data.attributes.id,
              user_id: paper.data.attributes.user.id,
              title: paper.data.attributes.title,
              abstract: paper.data.attributes.abstract,
              doi: paper.data.attributes.doi,
              category: paper.data.attributes.category,
              rating: 0,
              reviewCount: 0,
              created_at: paper.data.attributes.created_at
            }
          ]
        });
      }, 1000);
    });
    // } else {
    //   console.log(" paper not posted ☹️");
    // }
  };

  usersPostsReview = review => {
    API.postReview(review).then(review =>
      console.log("here is the returned review object", review)
    );
  };

  updateRating = (value, id) => {
    API.updatePaperRating(value, id);
    // return this.state.allPapers.map(paper => {
    //   if (paper.id === id) {
    //    return paper.rating = value;
    //   }
    // });
  };

  showMenu = () => {
    this.setState({
      menu: !this.state.menu
    });
  };

  filterPapers = token =>
    this.state.allPapers.filter(paper => paper.user_id === parseInt(token));

  sortPapers = sortType => {
    console.log(sortType);
    switch (sortType) {
      default:
        break;
      case "Rating":
        this.setState({
          allPapers: this.sortRating(this.state.allPapers)
        });
        break;
      case "Debated":
        this.setState({
          allPapers: this.sortDebated(this.state.allPapers)
        });
        break;
      case "Latest":
        this.setState({
          allPapers: this.sortCreatedAt(this.state.allPapers)
        });
        break;
    }
  };

  sortRating = papers => papers.sort((a, b) => b.rating - a.rating);

  sortDebated = papers => papers.sort((a, b) => b.reviewCount - a.reviewCount);

  sortCreatedAt = papers =>
    papers.sort((a, b) => moment(b.created_at) - moment(a.created_at));

  render() {
    return (
      <Fragment>
        <div className="App">
          <MenuBar
            user={this.state.user}
            signOut={this.signOut}
            showMenu={this.showMenu}
            menuState={this.state.menu}
          />
          {!this.state.menu ? null : (
            <Menu
              menu={this.state.menu}
              user={this.state.user}
              signOut={this.signOut}
              showMenu={this.showMenu}
            />
          )}
          <CreateRoutes
            user={this.state.user}
            signOut={this.signOut}
            submitSignUp={this.submitSignUp}
            loggingUser={this.state.loggingUser}
            submitSignIn={this.submitSignIn}
            updateBio={this.updateBio}
            userPapers={this.filterPapers}
            allPapers={this.state.allPapers}
            userPostsPaper={this.userPostsPaper}
            allUsers={this.state.allUsers}
            allPaperIDs={this.state.allPaperIDs}
            usersPostsReview={this.usersPostsReview}
            updateRating={this.updateRating}
            sortPapers={this.sortPapers}
          />
        </div>
        <FooterBar />
      </Fragment>
    );
  }
}

export default withRouter(App);
