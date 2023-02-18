import React from "react";
import AdvertiseCard from "./AdvertiseCard";

const FeaturesSection = () => {
  return (
    <div className="features-section-container">
      <h2>Features</h2>
      <p>Everything that your organisation will love, & more.</p>
      <div className="features-grid">
        <div className="grid-item">
          <img
            src="https://www.boloforms.com/_next/static/media/pr_agiledeploy.b988c9c8.svg"
            alt="features-img"
          />
          <h3>Get started in less than 5 minutes.</h3>
          <p>
            Just use an existing Google Form, add approvers, and we'll notify
            them via email when submissions are made.
          </p>
        </div>
        <div className="grid-item">
          <img
            src="https://www.boloforms.com/_next/static/media/pr_dyncaseroute.02285ff2.svg"
            alt="features-img"
          />
          <h3>Multi-level workflows</h3>
          <p>
            To ensure that your executives do not approve a document until it
            has been reviewed and accepted by other employees, you can set up
            multi-level approval processes.
          </p>
        </div>
        <div className="grid-item">
          <img
            src="https://www.boloforms.com/_next/static/media/pr_dynbusrules.572419de.svg"
            alt="features-img"
          />
          <h3>Dynamic Reciepients</h3>
          <p>
            Approvers can be selected based on the answers to a form response or
            entered manually by the requestor.
          </p>
        </div>
        <div className="grid-item">
          <img
            src="https://www.boloforms.com/_next/static/media/pr_socialtask.06e17c13.svg"
            alt="features-img"
          />
          <h3>Role Based Workflows</h3>
          <p>
            Assign the following roles to your recipients: Approver, Receive a
            Copy, and Send Final Email Only.
          </p>
        </div>
        <div className="grid-item">
          <img
            src="https://www.boloforms.com/_next/static/media/pr_visualprcdesign.0ff90171.svg"
            alt="features-img"
          />
          <h3>Conditional Logic</h3>
          <p>
            To prevent unnecessary work for approvers, set logic with your
            approvals to ensure approvers only receive the requests that are
            relevant to them.
          </p>
        </div>
        <div className="grid-item">
          <img
            src="https://www.boloforms.com/_next/static/media/pr_instaaccess.e822dad7.svg"
            alt="features-img"
          />
          <h3>One-click Approvals</h3>
          <p>
            Notification emails are sent to users and can be approved with a
            single click.
          </p>
        </div>
        <div className="grid-item">
          <img
            src="https://www.boloforms.com/_next/static/media/pr_intuserinter.41c7f4bc.svg"
            alt="features-img"
          />
          <h3>Responsive design</h3>
          <p>
            It is designed to be mobile-first, and seamlessly works on desktop
            and tablet as well.
          </p>
        </div>
        <div className="grid-item">
          <img
            src="https://www.boloforms.com/_next/static/media/pr_processoptim.f6216ec3.svg"
            alt="features-img"
          />
          <h3>Enterprise grade security</h3>
          <p>
            Majority of data stored in your spreadsheet. This ensures you have
            the complete control of your data with end to end encryption.
          </p>
        </div>
        <div className="grid-item">
          <img
            src="https://www.boloforms.com/_next/static/media/pr_dashboard.64597267.svg"
            alt="features-img"
          />
          <h3>Custom Dashboard</h3>
          <p>
            Track approvals of various forms from a single place! See the
            approval process for each request in real-time
          </p>
        </div>
      </div>
      <div className="review-card">
        <img
          src="https://www.boloforms.com/_next/static/media/alaa.a9f02030.jpeg"
          alt="user-img"
          style={{ objectFit: "cover" }}
        />

        <div className="review-card-details">
          <img
            src="https://www.boloforms.com/_next/static/media/Stars.885edd0c.svg"
            alt="stars"
          />
          <p
            style={{ paddingBottom: "0", textAlign: "start", fontSize: "16px" }}
          >
            "Boloforms has changed the way my team and I work. We used to have a
            very inefficient workflow, but Boloforms has streamlined it and
            allowed us to get our daily tasks done in a fraction of the time.
            Plus, it's incredibly user friendly and easy to understand. I highly
            recommend Boloforms for anyone who needs an efficient Google
            workflow software!"
          </p>
          <h4>Alaa Khaled</h4>
        </div>
      </div>
      <AdvertiseCard />
      <div className="review-card">
        <img
          src="https://www.boloforms.com/_next/static/media/deepak.e041dab0.jpeg"
          alt="user-img"
          style={{ objectFit: "cover" }}
        />

        <div className="review-card-details">
          <img
            src="https://www.boloforms.com/_next/static/media/Stars.885edd0c.svg"
            alt="stars"
          />
          <p
            style={{ paddingBottom: "0", textAlign: "start", fontSize: "16px" }}
          >
            "Easy to use interface and timely support...looking for more
            features"
          </p>
          <h4>Deepak S (Solero Corporation)</h4>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
