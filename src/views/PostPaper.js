import React, { Component } from "react";
var doiRegex = require("doi-regex");

// const options = [
//   { key: "c", text: "Chemistry", value: "Chemistry" },
//   { key: "b", text: "Biology", value: "Biology" },
//   { key: "p", text: "Physics", value: "Physics" }
// ];

class PostPaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paper: {
        title: "",
        abstract: "",
        category: "",
        doi: "10.1016/j.cell.2015.02.015",
        user_id: props.user_id
      }
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
    if (!this.validate()) return;
    this.props.userPostsPaper(this.state.paper);
    this.props.updatePaperCount();
    this.props.addPaperToggle();
  };

  validate = () => {
    const { doi, title, abstract, category } = this.state.paper;
    return (
      (doiRegex({ exact: true }).test(doi) ||
        doiRegex.declared({ exact: true }).test(doi)) &&
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
          <input
            fluid
            placeholder="enter paper title min 5 chars... (disabled for demo)"
            name="title"
            disabled
            onChange={this.handleInputChange}
          />
          <input
            fluid
            placeholder="enter the DOI (disabled for demo)"
            name="doi"
            disabled
            // onChange={this.handleInputChange}
          />
          <textarea
            placeholder="enter a brief description min 20 chars (disabled for demo)"
            className="paper-description-input"
            type="text"
            name="abstract"
            disabled
            onChange={this.handleInputChange}
          />

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
          <button type="submit" disabled>add paper</button>
        </form>
      </div>
    );
  }
}

export default PostPaper;
