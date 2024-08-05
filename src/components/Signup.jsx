/* eslint-disable no-unused-vars */
import React from "react";
import SignupCSS from "../styles/Signup.module.css";
import imageSignup from "../images/imageSignUp.png";

const Signup = () => {
  return (
    <div className={SignupCSS.container}>
      <div className={SignupCSS.PaneContainer}>
        <div className={SignupCSS.leftPane}>
          <img src={imageSignup} alt="Signup" className={SignupCSS.image} />
        </div>
        <div className={SignupCSS.rightPane}>
          <button className={SignupCSS.backButton}>← back</button>
          <h2 className={SignupCSS.signupTitle}>SignUp your account</h2>
          <form className={SignupCSS.form}>
            <input
              type="text"
              placeholder="UserName"
              className={SignupCSS.input}
            />
            <input
              type="email"
              placeholder="Email"
              className={SignupCSS.input}
            />
            <input
              type="password"
              placeholder="Password"
              className={SignupCSS.input}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className={SignupCSS.input}
            />
            <button type="submit" className={SignupCSS.SignupButton}>
              Signup
            </button>
          </form>
          <div className={SignupCSS.links}>
            <p>
              Already have account?{" "}
              <a href="#" className={SignupCSS.registerLink}>
                 Login here
              </a>
            </p>
          </div>
          <div className={SignupCSS.terms}>
            <a href="/terms-of-use">Terms of Use</a>.{" "}
            <a href="/privacy-policy">Privacy policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
