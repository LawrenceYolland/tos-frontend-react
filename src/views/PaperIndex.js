import React, { Component, Fragment } from "react";
import Paper from "../components/Paper";
import SortPapers from "../components/SortPapers";
import FilterPapers from "../components/FilterPapers";
import moment from "moment";
import NoContentAvailable from "../containers/NoContentAvailble";

class PaperIndex extends Component {
  state = {
    filterType: 0
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  timeFilteredPapers = papers => {
    if (this.state.filterType === 0) return papers;
    if (this.state.filterType === 1) return this.filterByDay(papers);
    if (this.state.filterType === 2) return this.filterByWeek(papers);
  };

  filterByDay = papers => {
    console.log("in the day filter");
    const testDate = moment();
    const filteredList = papers.filter(paper => {
      let paperDate = moment(paper.created_at);
      return moment(paperDate._d).isSame(testDate._d, "day");
    });
    return filteredList;
  };

  filterByWeek = papers => {
    console.log("in the week filter");
    const testDate = moment();
    const filteredList = papers.filter(paper => {
      let paperDate = moment(paper.created_at);
      return moment(paperDate._d).isSame(testDate._d, "week");
    });
    return filteredList;
  };

  setFilterType = type => this.setState({ filterType: type });

  render() {
    const { allPapers, sortPapers } = this.props;
    const indexType = "main";
    const papers = this.timeFilteredPapers(allPapers).map(p => (
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
          <div className="filter-sort-buttons">
            <SortPapers sortPapers={sortPapers} />

            <FilterPapers setFilterType={this.setFilterType} />
          </div>
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

export default PaperIndex;
