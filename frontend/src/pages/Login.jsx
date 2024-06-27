import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import Footer from "../Components/footer/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    // console.log(email, password);
  };
  return (
    <>
      <form className="login" onSubmit={handleLogin}>
        <h3 className="auth-title">Login </h3>

        <label>Email:</label>
        <input
          type="email"
          className=""
          // placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password:</label>
        <input
          type="password"
          className=""
          // placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button disabled={isLoading}>Login </button>
        {error && <div className="error">{error}</div>}

        <div className="forget-password">
          <Link to="/" className="password">
            Forget Password?
          </Link>
          <Link to="/signup" className="create">
            Create new account
          </Link>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Login;
