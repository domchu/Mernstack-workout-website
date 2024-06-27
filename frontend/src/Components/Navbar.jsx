import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
// import BrandLogo from "../assets/Strengthy-brand-logo.svg";
import BrandLogo from "../assets/strengthy-brand-logo.svg"

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <header>
        <div className="container">
          <Link to="/">
            <img src={BrandLogo} alt="Brand Logo" />
            {/* <h1>Strengthy</h1> */}
          </Link>
          <div className="nav-link">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/page">Pages</Link>
            <Link to="/classes">Classes</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/faq">Faq</Link>
          </div>
          <nav>
            <Link to="/bookclasses" className="book-classes">
              Book Classes
            </Link>
            {user && (
              <div>
                <span style={{ margin: "7px" }}>{user.email}</span>
                <button className="log-out" onClick={handleLogout}>
                  Log Out
                </button>
              </div>
            )}
            {!user && (
              <div>
                <Link to="/login">Login</Link>
                <Link to="/signup"> Signup</Link>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
