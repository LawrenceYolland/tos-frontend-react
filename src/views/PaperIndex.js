import React, { Component } from "react";
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
    if (this.state.filterType === 3) return this.filterByYesterday(papers);
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

  filterByYesterday = papers => {
    console.log("in the yesterday filter");
    const testDate = moment().subtract(1, "day");

    const filteredList = papers.filter(paper => {
      let paperDate = moment(paper.created_at);
      return moment(paperDate._d).isSame(testDate._d, "day");
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
      <div className="all-papers">
        <SortPapers sortPapers={sortPapers} />
        <FilterPapers setFilterType={this.setFilterType} />
        {papers.length > 0 ? (
          <papers>
            <ul className="papers-list">{papers}</ul>
          </papers>
        ) : (
          <NoContentAvailable />
        )}
      </div>
    );
  }
}

export default PaperIndex;
