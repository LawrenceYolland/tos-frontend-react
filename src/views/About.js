import React, { Component, Fragment } from "react";

class About extends Component {
  render() {
    return (
      <Fragment>
        <div className="s"> </div>
        <div className="about-body">
          <h1>About</h1>
          <div className="about-text-body">
            <h4>At TOS we want to bring science into the 21st century</h4>
            <p>
              Our approach to peer review is simple. We want everyone to take
              part in the scientific process, this means that researchers are
              front of house, sharing their research openly (we take advantage
              of Unpaywall’s great API to link up your open research). This
              also means that anyone can comment and review scientific works,
              and build a dialogue between members of the academic community.
              There will be no dreaded reviewer #3 on TOS, accountability and
              openness is key to the community we are building here.
            </p>
            <p>
              We also want to reinvent the scientific credit system. For many
              years your value as a researcher has been determined by the brand
              of the last journal you published in, or the name above the door
              in the labs you have served. This misaligns the incentives of
              science, moving beyond researching for the sake of knowledge, and
              building out humanity’s corpus of understanding. It corporatises
              curiosity, drives some researchers to fraudulent behaviour, and
              leaves out many from being able to contribute meaningfully to
              research as grant review committees use this publication data to
              determine their investments. At TOS, community contributions are
              key, with our researchers and peers gaining credit for the papers
              and reviews they contribute.
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default About;
