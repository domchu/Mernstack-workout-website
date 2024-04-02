import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

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
            <h1>Strengthy</h1>
          </Link>
          <div className="nav-link">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/faq">Faq</Link>
          </div>
          <nav>
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
