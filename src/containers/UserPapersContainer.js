import React from "react";
import UserPaper from "../components/UserPaper";

const UserPapersContainer = ({ userPapers }) => {

  const papers = userPapers.map(paper => (
    <UserPaper
      key={paper.id}
      id={paper.id}
      {...paper}
    />
  ));
  return <ul className="user-papers-container">{papers}</ul>;
};

export default UserPapersContainer;
