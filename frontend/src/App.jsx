import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./Components/Navbar";
import About from "./pages/About";
import Page from "./pages/Page";
import Classes from "./pages/Classes";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import BookClasses from "./pages/BookClasses";
import Error from "./pages/Error";

function App() {
  const { user } = useAuthContext();

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route
                path="/"
                element={user ? <Home /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/signup"
                element={!user ? <Signup /> : <Navigate to="/" />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/page" element={<Page />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/bookclasses" element={<BookClasses />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

{
  /* <Route path="/" element={<Home />} /> */
}
{
  /* <Route path="/login" element={<Login />} /> */
}
{
  /* <Route path="/signup" element={<Signup />} /> */
}