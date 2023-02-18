import React, { useState } from "react";

const Header = () => {
  const [btnOpen, setBtnOpen] = useState(false);
  const [smNav, setSmNav] = useState(false);
  const handleProductBtnClick = (e) => {
    if (btnOpen === false) {
      setBtnOpen(true);
    } else {
      setBtnOpen(false);
    }
  };

  const handleMenuClick = () => {
    if (smNav === false) {
      setSmNav(true);
    } else {
      setSmNav(false);
    }
  };

  return (
    <div className="nav-container">
      <div className="nav-bar-wrapper">
        <a className="flex" href="/">
          <img
            src="https://www.boloforms.com/_next/static/media/logo-text.e6f7617c.svg"
            alt="nav-logo"
            className="nav-logo"
          />
        </a>
        <ul className="nav-links-wrapper">
          <li className="flex" style={{ gap: "4px" }}>
            <button className="flex" onClick={handleProductBtnClick}>
              Products{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="20px"
                className="chevron-down-icon"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
              </svg>
            </button>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Guides</a>
          </li>
          <li>
            <a href="/">Templates</a>
          </li>
        </ul>
        <div className="nav-btn-wrapper">
          <a className="secondary-btn" href="/">
            Install Now
          </a>
          <a className="primary-btn" href="/">
            BoloForms Premium
          </a>
        </div>
        <button className="hamburger-btn" onClick={handleMenuClick}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            width="24px"
            height="24px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fontSize: "24px" }}
          >
            <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
          </svg>
        </button>
      </div>

      {btnOpen && (
        <div className="drop-down-menu-wrapper">
          <ul>
            <li className="dropmenu-item">
              <a href="https://www.boloforms.com/form-approval/">
                <img
                  src="https://www.boloforms.com/_next/static/media/TP.5489abce.svg"
                  alt="dropmenuicon"
                />
                <div>
                  <h5>Form Approvals</h5>
                  <p>
                    Create interactive workflows, approval flows & automate
                    processes using Google Forms.
                  </p>
                </div>
              </a>
            </li>
            <li className="dropmenu-item">
              <a href="https://www.boloforms.com/sheetgod/">
                <img
                  src="https://www.boloforms.com/_next/static/media/FA.c696cc9e.svg"
                  alt="dropmenuicon"
                />
                <div>
                  <h5>SheetGod</h5>
                  <p>AI-powered Excel magic made easy!</p>
                </div>
              </a>
            </li>
            <li className="dropmenu-item">
              <a href="https://www.boloforms.com/signature/">
                <img
                  src="https://www.boloforms.com/_next/static/media/S.87bf14fd.svg"
                  alt="dropmenuicon"
                />
                <div>
                  <h5>Signature</h5>
                  <p>Add Signature href your Google Forms</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      )}

      {smNav && (
        <div className="sm-screen-nav">
          <ul>
            <li className="flex" style={{ gap: "4px" }}>
              <button className="flex" onClick={handleProductBtnClick}>
                Products{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="20px"
                  className="chevron-down-icon"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                </svg>
              </button>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Guides</a>
            </li>
            <li>
              <a href="/">Templates</a>
            </li>
          </ul>
          <div className="nav-btn-wrapper sm_screen_btn_wrapper">
            <a className="secondary-btn" href="/">
              Install Now
            </a>
            <a className="primary-btn" href="/">
              BoloForms Premium
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
