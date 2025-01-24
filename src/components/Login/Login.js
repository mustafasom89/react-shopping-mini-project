import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Header from "../Home/Header";
import Home from "../Home/Home";
import Products from "../products/Products";
import About from "../About/About";
import Registration from "../Registrations/registration";
import { Provider } from "react-redux";
import store from "../../store/store";
import Contact from "../Home/Contact";
import "../../css/style.css";
import { useDispatch } from "react-redux";

// Validation schema for the login form
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();

  // Handles the login form submission
  const handleLogin = (values) => {
    setLoggedIn(true);
    setUsername(values.email);
  };

  // Handles the logout action
  const handleLogout = () => {
    setLoggedIn(false);
    const start = 0;
    dispatch({ type: "NEW", payload: start });
  };

  return (
    <Router>
      <div>
        {/* Renders the header */}
        <Header
          loggedIn={loggedIn}
          username={username}
          onLogout={handleLogout}
        />
        {loggedIn ? (
          <Provider store={store}>
            <div>
              {/* Renders the navigation menu */}
              <ul className="nav-menu">
                <li>
                  <Link to="/" exact>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/registration">Registrations</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>

              <Routes>
                {/* Defines the routes for different pages */}
                <Route exact path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/Contact" element={<Contact />} />
              </Routes>
            </div>
          </Provider>
        ) : (
          <div className="login-form">
            {/* Renders the login form */}
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              <Form className="login-section">
                <div>
                  <label className="login-label" htmlFor="email">
                    Email
                  </label>
                  <Field
                    className="login-input"
                    type="email"
                    id="email"
                    name="email"
                  />
                  <ErrorMessage
                    className="field-error"
                    name="email"
                    component="div"
                  />
                </div>

                <div>
                  <label className="login-label" htmlFor="password">
                    Password
                  </label>
                  <Field
                    className="login-input"
                    type="password"
                    id="password"
                    name="password"
                  />
                  <ErrorMessage
                    className="field-error"
                    name="password"
                    component="div"
                  />
                </div>

                <button className="login-button" type="submit">
                  Login
                </button>
              </Form>
            </Formik>
          </div>
        )}
      </div>
    </Router>
  );
};

export default LoginPage;
