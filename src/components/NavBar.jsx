// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBarCSS from "../styles/NavBar.module.css";
import avatarImage from "../images/avatar.png";
import { Link } from "react-router-dom";

const NavBar = () => {

    
  return (
    <div className={NavBarCSS.navbar}>
        <Link className={NavBarCSS.backButton} to="/" >← back home</Link>
      <div className={NavBarCSS.userDetails}>
        <img src={avatarImage} alt="Avatar" className={NavBarCSS.avatar} />
        <span className={NavBarCSS.userName}>NAYI Edimond</span>
      </div>
    </div>
  );
};

export default NavBar;