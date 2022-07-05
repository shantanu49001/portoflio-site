import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>shantanu236572381@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/t.shxntxnu/" alt=""><Insta color="white" size={"3rem"} /></a>

          <a href="https://www.linkedin.com/in/shantanu-tiwari-836ab021b/"><LinkedIn color="white" size={"3rem"} /></a>
          <a href="https://github.com/shantanu49001" alt=""><Gitub color="white" size={"3rem"} /></a>  
        </div>
      </div>
    </div>
  );
};

export default Footer;
