import React from "react";
import AdvertiseCard from "./AdvertiseCard";

const HowItWorksSection = () => {
  return (
    <div className="how-it-works-section-container">
      <h2>How does BoloForms work?</h2>
      <p>Set up your first workflow in just 3 easy steps.</p>
      <div className="how-it-works-wrapper">
        <div className="steps-wrapper">
          <img
            src="https://www.boloforms.com/_next/static/media/2.2709e204.svg"
            alt="how-it-works-img"
          />
          <div className="step-box">
            <h3>Step 1:</h3>
            <p>
              Choose a template or add questions to create your Google Form.
            </p>
          </div>
        </div>
        <div className="steps-wrapper">
          <img
            src="https://www.boloforms.com/_next/static/media/1.b2cc23b0.svg"
            alt="how-it-works-img"
          />
          <div className="step-box">
            <h3>Step 2:</h3>
            <p>
              Enable Single/Multi Step approval and add necessary approvers!
            </p>
          </div>
        </div>
        <div className="steps-wrapper">
          <img
            src="https://www.boloforms.com/_next/static/media/3.1a7ec00e.svg"
            alt="how-it-works-img"
          />
          <div className="step-box">
            <h3>Step 3:</h3>
            <p>Now you can enable the workflow and share the Google Form.</p>
          </div>
        </div>
      </div>
      <div className="review-card">
        <img
          src="https://www.boloforms.com/_next/static/media/repa.483a1471.jpeg"
          alt="user-img"
        />

        <div className="review-card-details">
          <img
            src="https://www.boloforms.com/_next/static/media/Stars.885edd0c.svg"
            alt="stars"
          />
          <p>
            "Boloforms has been an absolute lifesaver for me. It makes workflow
            tasks much easier and helps to ensure that everything runs smoothly.
            I love how it automates tasks and eliminates manual processes,
            saving me time and effort. It's a great Google Workflow software and
            is well worth the money!"
          </p>
          <h4>Repa Mandala</h4>
        </div>
      </div>
      <AdvertiseCard />
    </div>
  );
};

export default HowItWorksSection;
