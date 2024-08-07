// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignupCSS from "../styles/Signup.module.css";
import imageSignup from "../images/imageSignUp.png";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [namesError, setNamesError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios({
      method: "POST",
      url: "https://qt-testbackend.onrender.com/api/users/signup",
      data: {
        names: names,
        email: email,
        password: password,
      },
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        toast.success(response.data.message || "Sign up successful!");
        setIsLoading(false);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.response?.data?.message || "Sign up failed. Please try again.");
      });
  };

  const validateForm = (e) => {
    e.preventDefault();
    let valid = true;
    const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!names.trim()) {
      setNamesError("Please enter your full name");
      valid = false;
    } else {
      setNamesError("");
    }
    if (!isValidEmail.test(email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    } else {
      setEmailError("");
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      valid = false;
    } else if (password.indexOf(" ") >= 0) {
      setPasswordError("Password can't contain space");
      valid = false;
    } else {
      setPasswordError("");
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      valid = false;
    } else {
      setConfirmPasswordError("");
    }

    if (valid) {
      handleSignup(e);
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className={SignupCSS.container}>
      <ToastContainer />
      <div className={SignupCSS.PaneContainer}>
        <div className={SignupCSS.leftPane}>
          <img src={imageSignup} alt="Signup" className={SignupCSS.image} />
        </div>
        <div className={SignupCSS.rightPane}>
          <h2 className={SignupCSS.signupTitle}>Sign Up for an Account</h2>
          <form className={SignupCSS.form} onSubmit={validateForm}>
            <p style={{ fontSize: 10, color: "red" }}>{namesError}</p>
            <input
              type="text"
              name="names"
              placeholder="Full Name"
              className={SignupCSS.input}
              value={names}
              onChange={(e) => setNames(e.target.value)}
              disabled={isLoading}
            />
            <p style={{ fontSize: 10, color: "red" }}>{emailError}</p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={SignupCSS.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />  
            <p style={{ fontSize: 10, color: "red" }}>{passwordError}</p>
            <input
              type="password"
              name="password"
              placeholder="Password (min 6 characters)"
              className={SignupCSS.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
            <p style={{ fontSize: 10, color: "red" }}>{confirmPasswordError}</p>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className={SignupCSS.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isLoading}
            />
            <button type="submit" className={SignupCSS.SignupButton} disabled={isLoading}>
              {isLoading ? "Signing up..." : "Sign Up"}
            </button>
          </form>
          <div className={SignupCSS.links}>
            <p>
              Already have an account?{" "}
              <Link to="/login" className={SignupCSS.registerLink}>
                Login here
              </Link>
            </p>
          </div>
          <div className={SignupCSS.terms}>
            <a href="/terms-of-use">Terms of Use</a>.{" "}
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;