import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
const TitleBlock = () => {
  return (
    <div className="hpc-h1-container">
      <h1 className="hpc-h1">
        <span className="hpc-span">
          democratising science through open peer review
        </span>
      </h1>
      <div className="title-btn-container">
        <Link to="/about">
          <Button color="purple" fluid>
            Find out more
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TitleBlock;
