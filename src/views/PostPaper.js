import React, { Component } from "react";
var doiRegex = require("doi-regex");

const options = [
  { key: "c", text: "Chemistry", value: "Chemistry" },
  { key: "b", text: "Biology", value: "Biology" },
  { key: "p", text: "Physics", value: "Physics" }
];

class PostPaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paper: {
        title: "",
        abstract: "",
        category: "",
        doi: "",
        user_id: props.user_id
      },
      failedValidate: false
    };
  }

  handleInputChange = e => {
    this.setState({
      paper: {
        ...this.state.paper,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = () => {
    if (!this.validate()) {
      this.setState({ failedValidate: true });
    } else {
      this.props.userPostsPaper(this.state.paper);
      this.props.updatePaperCount();
      this.props.addPaperToggle();
    }
  };

  validate = () => {
    const { doi, title, abstract, category } = this.state.paper;
    return (
      (doiRegex({ exact: true }).test(doi) ||
        doiRegex.decla"red"({ exact: true }).test(doi)) &&
      title.length > 5 &&
      abstract.length > 20 &&
      category.length !== 0
    );
  };

  render() {
    return (
      <div className="post-input-container">
        <button onClick={this.props.addPaperToggle}>close</button>
        <form onSubmit={this.handleSubmit} className="add-paper-form">
          {this.state.failedValidate ? (
            <small style={{ "color": "red" }}>title: minimum 5 characters</small>
          ) : null}
          <input
            fluid
            placeholder="enter paper title ..."
            name="title"
            onChange={this.handleInputChange}
          />
          {this.state.failedValidate ? (
            <small style={{ "color": "red" }}>
              doi: try 10.1016/j.cell.2015.02.015
            </small>
          ) : null}

          <input
            fluid
            placeholder="enter the DOI ..."
            name="doi"
            onChange={this.handleInputChange}
          />
          {this.state.failedValidate ? (
            <small style={{ "color": "red" }}>
              description: minimum 20 characters
            </small>
          ) : null}

          <textarea
            placeholder="enter a brief description"
            className="paper-description-input"
            type="text"
            name="abstract"
            onChange={this.handleInputChange}
          />
          {this.state.failedValidate ? (
            <small style={{ "color": "red" }}>pick a category</small>
          ) : null}
          <select
            fluid
            name="category"
            placeholder="Category"
            onChange={this.handleInputChange}
            className="papers-category-select"
          >
            <option value="" disabled selected>
              &#8597; pick a category
            </option>
            <option name="Chemistry" value="Chemistry">
              Chemistry
            </option>
            <option name="Biology" value="Biology">
              Biology
            </option>
            <option name="Physics" value="Physics">
              Physics
            </option>
          </select>
          <button type="submit">add paper</button>
        </form>
      </div>
    );
  }
}

export default PostPaper;
