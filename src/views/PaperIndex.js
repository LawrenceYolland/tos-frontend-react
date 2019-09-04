import React, { Component } from "react";
import Paper from "../components/Paper";
import SortPapers from "../components/SortPapers";

class PaperIndex extends Component {
  render() {
    const { allPapers, sortPapers } = this.props;
    const indexType = "main";
    const papers = allPapers.map(p => (
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

export default PaperIndex;
