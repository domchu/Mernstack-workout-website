import React from "react";
import "./Footer.css";
import Logo from "../../assets/strengthy-footer-logo.svg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-left">
            <a href="/">
              <img src={Logo} alt="Brand Logo" />
            </a>
            <div className="footer-text">
              <p>
                Intelligent, Inspiring And Led By The Best Instructors,
                <br />A Huge Range Of Classes That Make Fitness Fun.
              </p>
            </div>
            <div className="call">
              <div className="call-tel">
                <h3>Call:</h3>
                <h5>01234 987654</h5>
                <h5>01234 987654</h5>
              </div>
              <div className="call-tel">
                <h3>Mail:</h3>
                <h5>contact@strengthy.com</h5>
              </div>
            </div>
          </div>
          <div className="footer-center">
            <h4>Utility Pages</h4>
            <div className="footer-text">
              <ul className="footer-menu">
                <li>
                  <a href="/classes" className="footer-page-link">
                    Book Classes
                  </a>
                </li>
                <li>
                  <a href="/about" className="footer-page-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="signup" className="footer-page-link">
                    Free Sign Up
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.strengthy.com/blog"
                    className="footer-page-link"
                  >
                    Blog Post
                  </a>
                </li>
                <li>
                  <a href="faq" className="footer-page-link">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="contact" className="footer-page-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-right">
            <h4>Newsletter</h4>
            <div className="footer-text">
              <input
                type="text"
                name=""
                placeholder="Enter your Email"
                className="footer-input"
              />
              <div className="subscribe">
                <a href="#">
                  <button type="submit">Subscribe</button>
                </a>
              </div>
            </div>
            <div className="social-media-link">
              <a href="https://www.facebook.com/strengthy">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/strengthy">
                <FaInstagram />
              </a>
              <a href="https://www.x.com/strengthy">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/strengthy">
                <FaLinkedin />
              </a>
            </div>
            <hr />
          </div>
        </div>
        <p className="copyright">
          Copyright &copy; Strengthy | Designed by Afoliba | Powered By Mr
          Dominic
        </p>
      </footer>
    </>
  );
};

export default Footer;
