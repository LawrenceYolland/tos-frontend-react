import React, { Component } from "react";
import HeadingBorder from "./HeadingBorder";
import PaperIndex from "../views/PaperIndex";
import moment from "moment";
import Paper from "./Paper";
import HomePaper from "./HomePaper";
import PromotedPaper from "./PromotedPaper";

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
    return sortedPapers.slice(0, 5);
  };

  render() {
    const { allPapers } = this.props;

    const papersLatest = this.latestPapersAll(allPapers)
      .map(p => <HomePaper key={p.id} id={p.id} {...p} />)
      .slice(1, 4);

    const promotedLatestPaper = this.latestPapersAll(allPapers).map(p => (
      <PromotedPaper key={p.id} id={p.id} {...p} promotedType="latest" />
    ))[0];

    const papersHottestBiology = this.hottestPapersBiology(allPapers)
      .map(p => <HomePaper key={p.id} id={p.id} {...p} />)
      .slice(1, 4);

    const promotedHottestPaperBiology = this.hottestPapersBiology(
      allPapers
    ).map(p => (
      <PromotedPaper key={p.id} id={p.id} {...p} promotedType="hottest" />
    ))[0];
    return (
      <div className="home-paper-highlight-container">
        <HeadingBorder title={"latest posts"} />
        <div className="featured-latest-paper">{promotedLatestPaper}</div>
        <div className="list-latest-papers">{papersLatest}</div>

        <HeadingBorder title={"hot in biology"} />
        <div className="featured-latest-paper">
          {promotedHottestPaperBiology}
        </div>
        <div className="list-latest-papers"> {papersHottestBiology}</div>
      </div>
    );
  }
}

export default HomePaperHighlight;
