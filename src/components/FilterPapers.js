import React, { Component } from "react";

class FilterPapers extends Component {
  constructor() {
    super();
    this.state = {
      filters: false,
      day: false,
      week: false,
      all: true
    };
  }
  activeButton = e => {
    if (e.target.innerText === "day") {
      this.setState({
        filters: true,
        day: true,
        week: false,
        all: false
      });
    } else if (e.target.innerText === "week") {
      this.setState({
        filters: true,
        week: true,
        day: false,
        all: false
      });
    } else {
      this.setState({
        filters: true,
        week: false,
        day: false,
        all: true
      });
    }
  };

  render() {
    return (
      <div className="paper-sort-btn-collection filter-papers">
        <a
          className={`paper-filter-btn ${
            this.state.filters && this.state.day ? "on" : "off"
          }`}
        >
          <span
            onClick={e => {
              this.activeButton(e);
              this.props.setFilterType(1);
            }}
          >
            day
          </span>
        </a>
        <a
          className={`paper-filter-btn ${
            this.state.filters && this.state.week ? "on" : "off"
          }`}
        >
          <span
            onClick={e => {
              this.activeButton(e);
              this.props.setFilterType(2);
            }}
          >
            week
          </span>
        </a>
        <a
          className={`paper-filter-btn ${
            this.state.filters && this.state.all ? "on" : "off"
          }`}
        >
          <span
            onClick={e => {
              this.activeButton(e);
              this.props.setFilterType(0);
            }}
          >
            all
          </span>
        </a>
      </div>
    );
  }
}

export default FilterPapers;
