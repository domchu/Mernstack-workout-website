import React from "react";
import "./footer.css";
import Logo from "../../assets/strengthy-brand/logo.png";

const footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-left">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
            <div className="footer-text">
              <p>
                Intelligent, Inspiring And Led By The Best Instructors, A Huge
                Range Of Classes That Make Fitness Fun.
              </p>
            </div>
          </div>
          <div className="footer-center">
            <h4>Utility Pages</h4>
            <div className="footer-text">
              <ul>
                <li>
                  <a href="/">Book Classes</a>
                </li>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-right">
            <h4>Newsletter</h4>
            <div className="footer-text">
              <input type="text" name="" placeholder="Enter your Email" />
              <div className="subscribe">
                <button type="submit">Subscribe</button>
              </div>
            </div>
            <div className="social-media-link">
              <a href="/">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="/">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
            <hr />
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
