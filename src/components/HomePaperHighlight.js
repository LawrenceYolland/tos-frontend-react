import React, { Component } from "react";
import HeadingBorder from "./HeadingBorder";
import PaperIndex from "../views/PaperIndex";
import moment from "moment";
import Paper from "./Paper";
import HomePaper from "./HomePaper";

class HomePaperHighlight extends Component {
  hottestPapersBiology = papers => {
    const sortedPapers = papers.sort((a, b) => b.reviewCount - a.reviewCount);
    const filteredPapers = sortedPapers.filter(a => a.category === "Biology");
    return filteredPapers.slice(0, 4);
  };

  latestPapersAll = papers => {
    const sortedPapers = papers.sort(
      (a, b) => moment(b.created_at) - moment(a.created_at)
    );
    return sortedPapers.slice(0, 4);
  };

  render() {
    const { allPapers } = this.props;
    // debugger
    const papersLatest = this.latestPapersAll(allPapers).map(p => (
      <HomePaper key={p.id} id={p.id} {...p} />
    ));
    const papersHottest = this.hottestPapersBiology(allPapers).map(p => (
      <HomePaper key={p.id} id={p.id} {...p} />
    ));
    return (
      <div className="home-paper-highlight-container">
        <HeadingBorder title={"latest posts"} />
        {papersLatest}
        <HeadingBorder title={"hot in biology"} />
        {papersHottest}
      </div>
    );
  }
}

export default HomePaperHighlight;
