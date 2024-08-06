/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginCSS from "../styles/Login.module.css";
import imageLogin from "../images/imageLogin.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://qt-testbackend.onrender.com/api/users/login", {
        email: formData.email,
        password: formData.password
      });

      if (response.data && response.data.data && response.data.data.token) {
        // Store the token in local storage or handle it as needed
        localStorage.setItem("token", response.data.data.token);

        // Show success notification
        toast.success("Login successful!");

        // Navigate to the home page or dashboard after successful login
        navigate("/addBlog");
      } else {
        toast.error("Login failed");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={LoginCSS.container}>
      <ToastContainer />
      <div className={LoginCSS.PaneContainer}>
        <div className={LoginCSS.leftPane}>
          <img src={imageLogin} alt="Login" className={LoginCSS.image} />
        </div>
        <div className={LoginCSS.rightPane}>
          <button className={LoginCSS.backButton} onClick={() => navigate(-1)}>← back</button>
          <h2 className={LoginCSS.signInTitle}>Sign into your account</h2>
          <form className={LoginCSS.form} onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={LoginCSS.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={LoginCSS.input}
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className={LoginCSS.loginButton} disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <div className={LoginCSS.links}>
            <Link to="/forgot-password" className={LoginCSS.forgotPassword}>
              Forgot password?
            </Link>
            <p>
              Don`t have an account?{" "}
              <Link to="/register" className={LoginCSS.registerLink}>
                Register here
              </Link>
            </p>
          </div>
          <div className={LoginCSS.terms}>
            <a href="/terms-of-use">Terms of Use</a>.{" "}
            <a href="/privacy-policy">Privacy policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;