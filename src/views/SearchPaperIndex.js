import React, { Component } from "react";
import Paper from "../components/Paper";
import { withRouter } from "react-router-dom";
import SortPapers from "../components/SortPapers";

class SearchPaperIndex extends Component {
  findPapers = papers => {
    return papers.filter(paper =>
      paper.title.toLowerCase().includes(
        this.props.history.location.pathname
          .split("/")[3] // "[]/[papers]/[search]/[:query]"
          .split("-")
          .join(" ")
          .toLowerCase()
      )
    );
  };

  render() {
    const { allPapers, sortPapers } = this.props;
    const indexType = "main";
    const searchResults = this.findPapers(allPapers);
    // const view = searchResults.length === 0 ?  history.push("/404")  check if search result returns anything -> render notfound if no match
    const papers = searchResults.map(p => (
      <Paper
        key={p.id}
        id={p.id}
        {...p}
        indexType={indexType}
        updateRating={this.props.updateRating}
      />
    ));
    return (
      <div className="all-papers">
          <SortPapers sortPapers={sortPapers} />
        <div>
          <ul className="papers-list">{papers}</ul>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchPaperIndex);
