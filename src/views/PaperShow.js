import React, { Component } from "react";
import API from "../adapters/API";
import { Link, withRouter } from "react-router-dom";
import ReviewContainer from "../containers/ReviewsContainer";

import { Segment, Dimmer, Loader } from "semantic-ui-react";

class PaperShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      paper: {
        title: "",
        abstract: "",
        category: "",
        author: [],
        doi: null
      },
      paperData: {
        url: ""
        // pdf_url: "" removed for demo
      },
      review: {
        content: "",
        paper_id: "",
        user_id: props.user.user_id
      },
      paperReviews: []
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    const { history } = this.props;
    const { access_token } = this.props.match.params;

    API.fetchPaper(access_token)
      .then(response => {
        if (!response.ok) {
          history.push("/404");
          throw response;
        } else if (response.ok) {
          return response.json();
        }
      })
      .then(paper => {
        this.setState({
          mounted: true,
          paper: {
            title: paper.data.attributes.title,
            abstract: paper.data.attributes.abstract,
            category: paper.data.attributes.category,
            author: paper.data.attributes.user.username,
            authorID: paper.data.attributes.user.id,
            doi: paper.data.attributes.doi,
            id: paper.data.attributes.id
          },
          review: {
            ...this.state.review,
            paper_id: paper.data.attributes.id
          },
          paperReviews: paper.data.attributes.reviews.map(p => p)
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    return this.state.paper.doi !== null && prevState.paper.doi === null
      ? this.fetchDOI(this.state.paper.doi)
      : null;
  }

  fetchDOI = doi => {
    console.log("the doi........", doi);
    fetch(
      `https://api.unpaywall.org/v2/${doi}?email=lawrence@sciencedisrupt.com`
    )
      .then(resp => resp.json())
      .then(paper => {
        this.setState({
          paperData: {
            url: paper.best_oa_location.url
            // pdf_url: paper.best_oa_location.url_for_pdf removed for demo
          }
        });
      });
  };

  handleChange = e => {
    this.setState({
      review: { ...this.state.review, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.usersPostsReview(this.state.review);
    this.setState({
      paperReviews: [...this.state.paperReviews, this.state.review],
      review: {
        ...this.state.review,
        content: ""
      }
    });
  };

  render() {
    const {
      title,
      abstract,
      category,
      author,
      doi,
      authorID
    } = this.state.paper;

    // const authors = author.map((a, idx) => <AuthorList key={idx} name={a} />);
    const path = `/users/${authorID}`;
    const view = !this.state.mounted ? (
      <Segment textAlign="center" style={{ height: "100vh", zIndex: "-1 " }}>
        <Dimmer active inverted>
          <Loader size="large">Loading</Loader>
        </Dimmer>
      </Segment>
    ) : (
      <div className="paper-show-container">
        <div className="s"></div>
        <div>
          <h1>{title}</h1>
          <div className={`paper-category-${category.toLowerCase()}`}>
            <h5>
              <span>{category}</span>
            </h5>
          </div>
          <span>
            submitted by: <Link to={path}>{author}</Link>
          </span>
          <h5>DOI: {doi}</h5>
          <p>{abstract}</p>
        </div>

        <div className="access-links">
          <h5>Access this Paper Here:</h5>
          <ul className="doi-oa-links">
            <li>
              <a href={this.state.paperData.url}>URL</a>
            </li>
            {/* <li>
              <a href={this.state.paperData.pdf_url}>PDF</a>
            </li> removed for demo*/}{" "}
          </ul>
        </div>

        <h5>Reviews</h5>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text-area"
            onChange={this.handleChange}
            name="content"
            placeholder="enter your review ..."
          ></input>
          <button type="submit"> submit review</button>
        </form>
        <ReviewContainer
          paperReviews={this.state.paperReviews}
          allUsers={this.props.allUsers}
        />
      </div>
    );
    return view;
  }
}

export default withRouter(PaperShow);
