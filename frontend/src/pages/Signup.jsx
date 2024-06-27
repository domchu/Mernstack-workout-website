import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import Footer from "../Components/footer/Footer";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { signup, error, isloading } = useSignup();

  const handleSignup = async (e) => {
    e.preventDefault();
    await signup(email, password, name);
  };
  return (
    <>
      <form className="signup" onSubmit={handleSignup}>
        <h3 className="auth-title">Sign Up</h3>

        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button disabled={isloading}>Sign up</button>
        {error && <div className="error">{error}</div>}
      </form>
      <Footer />
    </>
  );
};

export default Signup;
