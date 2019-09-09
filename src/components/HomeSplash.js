import React from "react";

const HomeSplash = ({ setPosition }) => {
  return (
    <div className="home-splash">
      <h1>T.O.S</h1>
      <div className="home-splash-image"></div>
      <div className="home-splash-overlay"></div>
      {/* <div onClick={setPosition} className="scroll"> */}
      <a href="#content-top" id="scroll-link">
        <span className="scroll">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172">
            <g style={{ fill: "#f9009a" }}>
              <path d="M154.74625,44.6125c-1.8275,0.05375 -3.5475,0.80625 -4.81062,2.12313l-63.93563,63.93562l-63.93562,-63.93562c-1.30344,-1.33031 -3.07719,-2.08281 -4.945,-2.08281c-2.795,0 -5.30781,1.70656 -6.35594,4.3c-1.06156,2.59344 -0.43,5.56312 1.57219,7.51156l68.8,68.8c2.6875,2.6875 7.04125,2.6875 9.72875,0l68.8,-68.8c2.0425,-1.96188 2.6875,-4.98531 1.58562,-7.60563c-1.08844,-2.62031 -3.66844,-4.3 -6.50375,-4.24625z"></path>
            </g>
          </svg>
        </span>
      </a>
      <span id="content-top"></span>
    </div>
  );
};

export default HomeSplash;
