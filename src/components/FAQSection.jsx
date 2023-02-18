import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

const FAQSection = () => {
  return (
    <div className="faq-section-container">
      <h1>Frequently Asked Questions</h1>
      <div className="flex" style={{ gap: "16px", alignItems: "flex-start" }}>
        <Accordion allowZeroExpanded={true} className="questions-wrapper">
          <div>
            <AccordionItem className="question-item">
              <AccordionItemHeading>
                <AccordionItemButton>
                  What is the difference between email and request?
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    className="faq-chev-icon"
                    viewBox="0 0 24 24"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                  </svg>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  A request needs to send multiple emails to different
                  recipients and respondent (optional) for approval. This means
                  that one request may costs lots of email quota.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="question-item">
              <AccordionItemHeading>
                <AccordionItemButton>
                  What will happen if I run out of email quota?
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    className="faq-chev-icon"
                    viewBox="0 0 24 24"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                  </svg>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  When you run out of email quota, the addon will temporary stop
                  running. You will have to wait for quota renewal to send email
                  again. If you are Free user, you can purchase Individual Plan
                  and enjoy much higher quotas (at least 5000 emails/month) and
                  unlimited emails sent per day.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="question-item">
              <AccordionItemHeading>
                <AccordionItemButton>
                  What will happen to my data if I cancel my subscription?
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    className="faq-chev-icon"
                    viewBox="0 0 24 24"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                  </svg>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  You data will still be stored in our database even after your
                  subscription cancellation. If you want to remove your data,
                  please contact to us via support@boloforms.com.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="question-item">
              <AccordionItemHeading>
                <AccordionItemButton>
                  I receive a permission error when I try to setup the Add-on
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    className="faq-chev-icon"
                    viewBox="0 0 24 24"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                  </svg>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  This is a known issue with Google permissions and it happens
                  when you are logged in with more than one Google account. Try
                  to sign out of all account except your main account.
                  Alternatively, try Guest/Incognito mode.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="question-item">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Can I use the addon if my organisation does not use Google
                  accounts?
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    className="faq-chev-icon"
                    viewBox="0 0 24 24"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                  </svg>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Yes, but be aware that Form owner/adminstrator in particular
                  still needs Google account. This is because the addon sends
                  email on your Gmail behalf.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="question-item">
              <AccordionItemHeading>
                <AccordionItemButton>
                  How can I contact support?
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    className="faq-chev-icon"
                    viewBox="0 0 24 24"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                  </svg>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  For any additional questions, you can contact us on
                  support@boloforms.com or on WhatsApp at +91-8830631677
                  anytime.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="question-item">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Why does the approval workflow sometimes work smoothly and
                  other times throws errors?
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    className="faq-chev-icon"
                    viewBox="0 0 24 24"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                  </svg>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  If you suddenly have an error running when using an add-on,
                  please let us know by sending an email to
                  support@boloforms.com. Our team will contact you as soon as
                  possible to look into the issue. If you need an expedited
                  support, feel free to message us on WhatsApp at
                  +91-8830631677.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </div>
          <div>
            <AccordionItem className="question-item">
              <AccordionItemHeading>
                <AccordionItemButton>
                  How to calculate the number of requests based on email quota?
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    className="faq-chev-icon"
                    viewBox="0 0 24 24"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                  </svg>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Emails & Requests are different. For examples, if you set up a
                  workflow with 2 recipients, a form respondent submit a request
                  then 2 emails counted to be sent to 2 recipients. In average,
                  a request from our users consists of 4 emails. That is why
                  free plan (500 emails) is calculated to be approximately 125
                  requests per month. The smaller number of recipient you set up
                  in the workflow, the more request you have with a fixed email
                  quota and vice versa.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="question-item">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Why the addon requires access to my Google Drive?
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    className="faq-chev-icon"
                    viewBox="0 0 24 24"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                  </svg>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Permission to Google Drive is only necessary for the addon to
                  perform actions related to your connected Google Form and
                  spreadsheet on your behalf. In no circumstance that we will
                  use those files for any other purposes or sharing to third
                  parties.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="question-item">
              <AccordionItemHeading>
                <AccordionItemButton>
                  How does approval workflow feature work?
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    className="faq-chev-icon"
                    viewBox="0 0 24 24"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                  </svg>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  When a Form Respondent sends a request, the addon will
                  automatically send approval notification email to your
                  specified recipient(s). Recipient can make One-click
                  approve/reject decision on email, or, approve/reject & comment
                  on BoloForms Approvals website. Finally, an email will be sent
                  to all recipients notifying the final result.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="question-item">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Does recipient need Google Account?
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    className="faq-chev-icon"
                    viewBox="0 0 24 24"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                  </svg>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  No. Recipients do not need Google account. They also do not
                  need to have access to your Google Form or spreadsheet. When a
                  request is sent, recipient will receive an email which
                  includes: One-click Approve & One-click Reject button: to
                  approve/reject immediately. Approve/Reject & Comment button:
                  to open BoloForms Website where you can approve/reject & give
                  comment on the request.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="question-item">
              <AccordionItemHeading>
                <AccordionItemButton>
                  How many recipients can I add?
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    className="faq-chev-icon"
                    viewBox="0 0 24 24"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                  </svg>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  There is no limit to the number of recipients. However, be
                  aware that the higher number of recipients is, the quicker
                  your emails quota may run out.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="question-item">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Can Form Respondent or Recipients edit a form submission?
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    className="faq-chev-icon"
                    viewBox="0 0 24 24"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                  </svg>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  You can have option to allow Form Respondents to edit their
                  own submission. However, Recipients can not edit submissions
                  from Respondent.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
