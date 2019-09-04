import React, { Component } from "react";
import Paper from "../components/Paper";
import { withRouter } from "react-router-dom";

class SearchPaperIndex extends Component {

  findPapers = papers => {
    return papers.filter(paper =>
      paper.title.toLowerCase().includes(
        this.props.history.location.pathname
          .split("/")[3]
          .split("-")
          .join(" ")
          .toLowerCase()
      )
    );
  };

  render() {
      
    const { allPapers, sortPapers } = this.props;
    // debugger
    const indexType = "main";
    const papers = this.findPapers(allPapers).map(p => (
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
        <select onChange={e => sortPapers(e.target.value)}>
          <option value="Ascending">ascending</option>
          <option value="Descending">descending</option>
          <option value="Rating">rating</option>
        </select>

        <div>
          <ul className="papers-list">{papers}</ul>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchPaperIndex);
