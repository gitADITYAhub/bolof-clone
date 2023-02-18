import React from "react";

const ContactUsSection = () => {
  return (
    <div className="contact-us-section-container">
      <img
        src="https://www.boloforms.com/_next/static/media/stars.6ce54309.png"
        alt="star-img"
      />
      <h1>
        Award-winning support<span>.</span>
      </h1>
      <p>
        Best-in-class support. We’re always here to help – here’s how to
        connect.
      </p>
      <div className="contact-us-cards-wrapper">
        <div className="contact-card-item">
          <img
            src="https://www.boloforms.com/_next/static/media/live-chat-support.8700dc17.png"
            alt="contact-card-img"
          />
          <h2>? Whatsapp chat</h2>
          <p>Ask a question right now.</p>
          <a className="secondary-btn contact-btn" href="/">
            Start a chat
          </a>
        </div>
        <div className="contact-card-item">
          <img
            src="https://www.boloforms.com/_next/static/media/support-email.d67bf660.png"
            alt="contact-card-img"
          />
          <h2>? Email</h2>
          <p>Get in touch by email.</p>
          <a className="secondary-btn contact-btn" href="/">
            Send an Email
          </a>
        </div>
        <div className="contact-card-item">
          <img
            src="https://www.boloforms.com/_next/static/media/helpcenter.1d93444b.png"
            alt="contact-card-img"
          />
          <h2>? Help center</h2>
          <p>In Depth Guides</p>
          <a className="secondary-btn contact-btn" href="/">
            Read articles
          </a>
        </div>
        <div className="contact-card-item">
          <img
            src="https://www.boloforms.com/_next/static/media/book-time.934f28c8.png"
            alt="contact-card-img"
          />
          <h2>? Google Meet</h2>
          <p>Guided support and Q&A.</p>
          <a className="secondary-btn contact-btn" href="/">
            Book a time
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
