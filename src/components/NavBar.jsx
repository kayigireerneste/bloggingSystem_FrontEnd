// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import NavBarCSS from "../styles/NavBar.module.css";
import avatarImage from "../images/avatar.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("user");
    if (name) {
      setUserName(name);
    }
  }, []);

  return (
    <div className={NavBarCSS.navbar}>
      <Link className={NavBarCSS.backButton} to="/">← back home</Link>
      <div className={NavBarCSS.userDetails}>
        <img src={avatarImage} alt="Avatar" className={NavBarCSS.avatar} />
        <span className={NavBarCSS.userName}>{userName || "Guest"}</span>
      </div>
    </div>
  );
};

export default NavBar;
