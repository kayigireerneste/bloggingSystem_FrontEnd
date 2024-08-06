// eslint-disable-next-line no-unused-vars
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

  const validateForm = () => {
    if (!formData.names.trim()) {
      toast.error("Please enter your full name");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      const payload = {
        names: formData.names,
        email: formData.email,
        password: formData.password
      };
      const response = await axios.post(
        "https://qt-testbackend.onrender.com/api/users/signup",
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      console.log('Server response:', response.data); // Log the entire response for debugging
      if (response.data && response.data.status === 'success') {
        if (response.data.data && response.data.data.token) {
          localStorage.setItem("token", response.data.data.token);
          toast.success("Sign up successful!");
          navigate("/login");
        } else {
          console.warn('Token not found in the response');
          toast.success("Sign up successful! Please log in.");
          navigate("/login");
        }
      } else {
        throw new Error(response.data.message || "Unexpected response from server");
      }
    } catch (err) {
      console.error('Signup error:', err);
      if (err.response) {
        toast.error(err.response.data.message || "Sign up failed. Please try again.");
      } else if (err.request) {
        toast.error("No response from server. Please check your internet connection.");
      } else {
        toast.error(err.message || "An unexpected error occurred. Please try again.");
      }
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
              disabled={loading}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={SignupCSS.input}
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
            <input
              type="password"
              name="password"
              placeholder="Password (min 8 characters)"
              className={SignupCSS.input}
              value={formData.password}
              onChange={handleChange}
              required
              disabled={loading}
              minLength={8}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className={SignupCSS.input}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              disabled={loading}
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