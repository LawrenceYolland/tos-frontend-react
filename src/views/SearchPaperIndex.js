import React, { Component, Fragment } from "react";
import Paper from "../components/Paper";
import { withRouter } from "react-router-dom";
import SortPapers from "../components/SortPapers";
import NoContentAvailable from "../containers/NoContentAvailble";

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
      <Fragment>
        <div className="s"> </div>
        <div className="all-papers">
          {papers.length > 0 ? (
            <papers>
              <ul className="papers-list">{papers}</ul>
            </papers>
          ) : (
            <NoContentAvailable />
          )}
        </div>
      </Fragment>
    );
  }
}

export default withRouter(SearchPaperIndex);
