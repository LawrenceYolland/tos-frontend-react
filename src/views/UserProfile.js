import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import UserProfileImage from "../components/UserProfileImage";
import UserRating from "../components/UserRating";
import UserPapersContainer from "../containers/UserPapersContainer";
import API from "../adapters/API";
import { Button } from "semantic-ui-react";
import PostPaper from "./PostPaper";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editBioToggle: null,
      user: {
        username: "",
        usertype: "",
        bio: "",
        id: ""
      },
      userPapers: props.allPapers,
      postPaperToggle: false,
      openVersion: {
        url: "",
        pdfURL: ""
      }
      // userPaperToggle: false
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    const { access_token } = this.props.match.params;
    this.setUserData(access_token);
  }

  componentDidUpdate() {
    const { access_token } = this.props.match.params;
    return parseInt(access_token) !== this.state.user.id
      ? this.setUserData()
      : false;
  }

  setUserData = () => {
    const { history } = this.props;
    const { access_token } = this.props.match.params;
    API.fetchUser(access_token)
      .then(response => {
        if (!response.ok) {
          history.push("/404");
          throw response;
        } else if (response.ok) {
          return response.json();
        }
      })
      .then(user => {
        this.setState({
          user: {
            username: user.data.attributes.username,
            usertype: user.data.attributes.usertype ? "Researcher" : "Peer",
            bio: user.data.attributes.bio,
            id: user.data.attributes.id
          },
          userPapers: this.props.allPapers,
          editBioToggle:
            parseInt(this.props.match.params.access_token) ===
            this.props.user.user_id
              ? false
              : null,
          paperCount: user.data.attributes.papers.length,
          reviewCount: user.data.attributes.reviews.length
        });
      });
  };

  handleBioChange = () => {
    console.log("edit the bio now ✅🖋");
    this.setState({
      editBioToggle: !this.state.editBioToggle
    });
  };

  editBio = e => {
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateBio(this.state.user);
    this.setState({
      editBioToggle: !this.state.editBioToggle
    });
  };

  addPaperToggle = () => {
    this.setState({
      postPaperToggle: !this.state.postPaperToggle
    });
  };

  updatePaperCount = () => this.setState({paperCount: this.state.paperCount+1})

  render() {
    const { user, postPaperToggle } = this.state;
    const papersView =
      user.usertype === "Researcher" ? (
        <Fragment>
          <div className="papers-header">
          <h5>Papers</h5>
          </div>
          {postPaperToggle ? (
            <PostPaper
              addPaperToggle={this.addPaperToggle}
              user_id={user.id}
              userPostsPaper={this.props.userPostsPaper}
              updatePaperCount={this.updatePaperCount}
            />
          ) : (
            <Fragment>
              {parseInt(this.props.match.params.access_token) ===
              this.props.user.user_id ? (
                <Button onClick={this.addPaperToggle}>add a paper</Button>
              ) : null}
            </Fragment>
          )}
          <UserPapersContainer
            userPapers={this.props.userPapers(
              this.props.match.params.access_token
            )}
          />
        </Fragment>
      ) : null;
    return (
      <Fragment>
        <div className="s"> </div>
        <div className="user-body">
          <div className="user-info-container">
            <UserProfileImage username={user.username} />
            <div className="profile-info-block">
              <h1 className="user-header">{user.username}</h1>
              {parseInt(this.props.match.params.access_token) ===
              this.props.user.user_id ? (
                <div className="edit-container">
                  {!this.state.editBioToggle ? (
                    <button
                      aria-label="edit bio"
                      onClick={this.handleBioChange}
                    >
                      edit profile
                    </button>
                  ) : null}
                </div>
              ) : null}
            </div>
            {this.state.editBioToggle ? (
              <div className="bio-edit">
                <form id="edit-user-bio" onSubmit={this.handleSubmit}>
                  <textarea
                    name="bio"
                    onChange={this.editBio}
                    value={user.bio}
                    className="bio-input"
                  />
                </form>
                <div className="form-buttons">
                  <button onClick={this.handleBioChange}>discard</button>
                  <button className="save-bio-button" form="edit-user-bio">save</button>
                </div>
              </div>
            ) : (
              <Fragment>
                <div className="user-bio-container">
                  <p>{user.bio}</p>
                </div>
                <div className="user-stats">
                  <span className="paper-count">{this.state.paperCount} papers</span>
                  <span className="review-count">{this.state.reviewCount} reviews</span>
                </div>
              </Fragment>
            )}
          </div>
          {papersView}
        </div>
      </Fragment>
    );
  }
}

export default withRouter(UserProfile);
