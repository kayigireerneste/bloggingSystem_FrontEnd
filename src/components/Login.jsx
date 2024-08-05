/* eslint-disable no-unused-vars */
import React from "react";
import LoginCSS from "../styles/Login.module.css";
import imageLogin from "../images/imageLogin.png";

const Login = () => {
  return (
    <div className={LoginCSS.container}>
      <div className={LoginCSS.PaneContainer}>
        <div className={LoginCSS.leftPane}>
          <img src={imageLogin} alt="Login" className={LoginCSS.image} />
        </div>
        <div className={LoginCSS.rightPane}>
          <button className={LoginCSS.backButton}>← back</button>
          <h2 className={LoginCSS.signInTitle}>Sign into your account</h2>
          <form className={LoginCSS.form}>
            <input
              type="email"
              placeholder="Email"
              className={LoginCSS.input}
            />
            <input
              type="password"
              placeholder="Password"
              className={LoginCSS.input}
            />
            <button type="submit" className={LoginCSS.loginButton}>
              Login
            </button>
          </form>
          <div className={LoginCSS.links}>
            <a href="/forgot-password" className={LoginCSS.forgotPassword}>
              Forgot password?
            </a>
            <p>
              Don`t have an account?{" "}
              <a href="/register" className={LoginCSS.registerLink}>
                Register here
              </a>
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
