import React from "react";
import Marquee from "react-fast-marquee";

const UsedBySection = () => {
  return (
    <div className="used-by-section-container">
      <h2>BoloForms Is Used By</h2>
      <Marquee style={{ zIndex: "-999" }}>
        <div className="company-scroller-wrapper">
          <div className="card-wrapper">
            <img
              src="https://www.boloforms.com/_next/static/media/1.890362c3.svg"
              alt="company-logo"
            />
          </div>
          <div className="card-wrapper">
            <img
              src="https://www.boloforms.com/_next/static/media/2.0b0df285.svg"
              alt="company-logo"
            />
          </div>
          <div className="card-wrapper">
            <img
              src="https://www.boloforms.com/_next/static/media/3.8cf4b5f3.svg"
              alt="company-logo"
            />
          </div>
          <div className="card-wrapper">
            <img
              src="https://www.boloforms.com/_next/static/media/4.b84353dc.svg"
              alt="company-logo"
            />
          </div>
          <div className="card-wrapper">
            <img
              src="https://www.boloforms.com/_next/static/media/5.9b049047.svg"
              alt="company-logo"
            />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default UsedBySection;
