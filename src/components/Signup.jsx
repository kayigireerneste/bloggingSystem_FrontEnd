/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignupCSS from "../styles/Signup.module.css";
import imageSignup from "../images/imageSignUp.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    names: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        names: formData.names,
        email: formData.email,
        password: formData.password
      };
      console.log('Payload:', payload);

      const response = await axios.post(
        "https://qt-testbackend.onrender.com/api/users/signup",
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      console.log('Response:', response);

      if (response.data && response.data.data && response.data.data.token) {
        localStorage.setItem("token", response.data.data.token);
        toast.success("Sign up successful!");
        navigate("/login");
      } else {
        toast.error("Sign up failed, try again");
      }
    } catch (err) {
      console.error('Error object:', err);
      if (err.response) {
        console.error('Error data:', err.response.data);
        console.error('Error status:', err.response.status);
        console.error('Error headers:', err.response.headers);
      } else if (err.request) {
        console.error('Error request:', err.request);
      } else {
        console.error('Error message:', err.message);
      }
      toast.error(err.response?.data?.message || "Sign up failed, try again");
    } finally {
      setLoading(false);
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
          <form className={SignupCSS.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="names"
              placeholder="Full Name"
              className={SignupCSS.input}
              value={formData.names}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={SignupCSS.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={SignupCSS.input}
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className={SignupCSS.input}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type="submit" className={SignupCSS.SignupButton} disabled={loading}>
              {loading ? "Signing up..." : "Sign Up"}
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