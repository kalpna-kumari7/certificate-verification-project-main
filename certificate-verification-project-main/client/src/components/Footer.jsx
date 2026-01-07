import React from "react";

const Footer = () => {
  return (
    <footer className="footer pt-4 pb-3 mt-auto shadow-sm" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h2 className="footer-brand">Certify</h2>
            <p className="small">
              Trusted certificate verification platform. Verify authenticity and download
              certificates instantly.
            </p>
          </div>

          <div className="col-md-4 mb-3 footer-links">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/verify-certificate">Verify Certificate</a>
              </li>
              <li>
                <a href="/about-us">About</a>
              </li>
              <li>
                <a href="/auth/login">Login</a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-3 footer-contact">
            <h4>Contact</h4>
            <p>
              {" "}
              <a
                href="https://www.linkedin.com/in/ashutosh-pandey-682b3b265/"
                target="_blank"
                rel="noreferrer"
              >
                Ashutosh Pandey
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/kalpna-singh-1ab4b2326/"
                target="_blank"
                rel="noreferrer"
              >
                Kalpana Singh
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bottom text-center">
          © {new Date().getFullYear()} Certify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
