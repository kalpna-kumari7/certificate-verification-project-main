import React from "react";
import Sidebar from "../components/AdminSidebar";
import "../assets/css/Team.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="hero-section" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 hero-content" data-aos="fade-right">
              <h1>Welcome to Certify</h1>
              <p>
                Your Trusted Certificate Verification Platform. Verify authenticity, download
                certificates, and build trust instantly.
              </p>
              <div>
                <NavLink to="/verify">
                  <button className="btn btn-primary-custom">Verify Certificate</button>
                </NavLink>

                {/* <button className="btn btn-secondary-custom">
                        Download Certificate
                       </button> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cert-collage" data-aos="zoom-in-up" data-aos-delay="200">
                <div className="cert-card cert-card-1">
                  <div className="cert-icon">
                    <i className="fas fa-award"></i>
                  </div>
                  <div className="cert-title">Excellence Award</div>
                </div>
                <div className="cert-card cert-card-2">
                  <div className="cert-icon">
                    <i className="fas fa-medal"></i>
                  </div>
                  <div className="cert-title">Achievement</div>
                </div>
                <div className="cert-card cert-card-3">
                  <div className="cert-icon">
                    <i className="fas fa-trophy"></i>
                  </div>
                  <div className="cert-title">Champion</div>
                </div>
                <div className="cert-card cert-card-4">
                  <div className="cert-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="cert-title">Top Performer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Overview Section --> */}
      <section className="overview-section" id="overview">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">
            Why Choose Certify?
          </h2>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4>Verify Authenticity</h4>
                <p>
                  Instantly verify the authenticity of certificates with our secure
                  blockchain-backed system.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-download"></i>
                </div>
                <h4>Easy Download</h4>
                <p>
                  Download and share your certificates seamlessly in multiple formats with just one
                  click.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-lock"></i>
                </div>
                <h4>Secure Access</h4>
                <p>
                  Role-based access control ensures your certificates are protected and accessed by
                  authorized users only.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h4>Auto Notifications</h4>
                <p>
                  Receive automatic email notifications when new certificates are issued or
                  verified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Team Section ===== */}
      <section className="team-section" id="about">
        <div className="container">
          <h1 className="section-title text-center" data-aos="fade-up">
            Meet Developers
          </h1>
          <p className="section-subtitle text-center" data-aos="fade-up">
            The core contributors behind the design and development of Certify
          </p>

          <div className="row justify-content-center g-4 mt-4">
            {/* Ashutosh Card */}
            <div className="col-lg-5 col-md-6" data-aos="fade-up">
              <div className="team-card-pro">
                <div className="team-card-header">
                  <img src="/src/assets/css/img/ashutosh.jpeg" alt="Ashutosh Pandey" />
                </div>

                <div className="team-card-body">
                  <h4>Ashutosh Pandey</h4>
                  <span className="designation">Backend Developer · MCA</span>

                  <p className="member-summary">
                    Solely responsible for the complete backend development and live project
                    implementation of Certify, ensuring secure, scalable, and high-performance
                    server-side functionality.
                  </p>

                  <ul className="responsibilities">
                    <li>Complete backend system development</li>
                    <li>REST API design & implementation</li>
                    <li>Database design & MongoDb integration</li>
                    <li>Authentication & authorization logic</li>
                    <li>Live project deployment & maintenance</li>
                  </ul>

                  <div className="team-social">
                    <a href="https://github.com/ashutosh-pandey29" target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ashutosh-pandey-682b3b265/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Kalpna Card */}
            <div className="col-lg-5 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="team-card-pro">
                <div className="team-card-header">
                  <img src="/src/assets/css/img/kalpna.jpg" alt="Kalpna Singh" />
                </div>

                <div className="team-card-body">
                  <h4>Kalpna Singh</h4>
                  <span className="designation">Frontend Developer · B.Tech</span>

                  <p className="member-summary">
                    Lead frontend developer who independently designed and developed the complete
                    user interface of Certify with a strong focus on usability, responsiveness, and
                    modern UI standards.
                  </p>

                  <ul className="responsibilities">
                    <li>Complete frontend development</li>
                    <li>UI/UX design & user flow implementation</li>
                    <li>Responsive layouts & dashboard design</li>
                    <li>Reusable React components</li>
                    <li>Frontend performance & visual optimization</li>
                  </ul>

                  <div className="team-social">
                    <a href="https://github.com/kalpna-kumari7" target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kalpna-singh-1ab4b2326/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
