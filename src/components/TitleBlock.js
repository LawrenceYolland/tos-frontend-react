import React from "react";
import { Button } from "semantic-ui-react";

const TitleBlock = () => {
  return (
    <div className="hpc-h1-container">
      <h1 className="hpc-h1">
        <span className="hpc-span">
          democratising science through open peer review
        </span>
      </h1>
      <Button color="purple" fluid>
        Find out more
      </Button>
    </div>
  );
};

export default TitleBlock;
