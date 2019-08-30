import React, { Component, Fragment } from "react";

import UserProfileImage from "../components/UserProfileImage";
import UserRating from "../components/UserRating";
import UserPapersContainer from "../containers/UserPapersContainer";
import API from "../adapters/API";
import { Button } from "semantic-ui-react";
import PostPaper from "./PostPaper";

class UserProfile extends Component {
  state = {
    editBioToggle: null,
    user: {
      username: "",
      usertype: "",
      bio: "",
      id: ""
    },
    userPapers: [],
    postPaperToggle: false
  };

  componentDidMount() {
    this.setUserData();
  }

  componentDidUpdate() {
    return parseInt(this.props.match.params.access_token) !== this.state.user.id
      ? this.setUserData()
      : false;
  }

  setUserData = () => {
    const { access_token } = this.props.match.params;
    console.log("access => 🎁", access_token);
    API.fetchUser(access_token).then(user => {
      console.log("attributes from user => 🎁", user.data.attributes);
      this.setState({
        user: {
          username: user.data.attributes.username,
          usertype: user.data.attributes.usertype ? "Researcher" : "Peer",
          bio: user.data.attributes.bio,
          id: user.data.attributes.id
        },
        userPapers: user.data.attributes.papers.map(paper => paper),
        editBioToggle:
          parseInt(this.props.match.params.access_token) ===
          this.props.user.user_id
            ? false
            : null
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

  showPostPaper = () => {
    this.setState({
      postPaperToggle: !this.state.postPaperToggle
    });
  };

  render() {
    const { user, postPaperToggle } = this.state;
    const {userPostsPaper, userPapers} = this.props
    return (
      <div className="user-profile-container">
        <h1>{user.username}</h1>
        <UserProfileImage username={user.username} />
        <UserRating />
        <h4>Bio:</h4>
        {this.state.editBioToggle ? (
          <Fragment>
            <form onSubmit={this.handleSubmit} className="bio-edit">
              <div className="form-buttons">
                <button onClick={this.handleBioChange}>
                  <span role="img" role="img" aria-label="discard changes">
                    🚮
                  </span>
                </button>
                <button type="submit">
                  <span role="img" aria-label="save changes">
                    💾
                  </span>
                </button>
              </div>
              <textarea
                name="bio"
                onChange={this.editBio}
                value={user.bio}
                className="bio-input"
              />
            </form>
          </Fragment>
        ) : (
          <Fragment>
            {parseInt(this.props.match.params.access_token) ===
            this.props.user.user_id ? (
              <Fragment>
                <button onClick={this.handleBioChange}>
                  <span role="img" aria-label="edit bio">
                    ✏️
                  </span>
                </button>
                <p>{user.bio}</p>
              </Fragment>
            ) : null}
          </Fragment>
        )}
        <h5>Your Papers</h5>
        {postPaperToggle ? (
          <PostPaper showPostPaper={this.showPostPaper} user_id={user.id} userPostsPaper={this.props.userPostsPaper} />
        ) :  <Button onClick={this.showPostPaper}>add a paper</Button>}
        <UserPapersContainer userPapers={userPapers} />
        <h5>Your Reviews</h5>
        <h5>Journal Clubs</h5>
      </div>
    );
  }
}

export default UserProfile;
