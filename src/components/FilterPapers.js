import React, { Component } from "react";

class FilterPapers extends Component {
  state = {
    filters: false,
    day: false,
    week: false
  };

  activeButton = e => {
    if (e.target.innerText === "day") {
      this.setState({
        filters: true,
        day: true,
        week: false
      });
    } else {
      this.setState({
        filters: true,
        week: true,
        day: false
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
      </div>
    );
  }
}

export default FilterPapers;
