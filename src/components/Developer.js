import React from "react";
import "./Developer.css";
import Footer from "./Footer";

import pfp from "./pfp.jpg";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Developer() {
  return (
    <>
      <div className="mybox">
        <div className="card-container">
          <img className="round" src={pfp} alt="user" />
          <h3>Sahil Bhanvadiya</h3>
          <h6>Ahmedabad</h6>
          <p>
            JavaScript developer and <br /> front-end developer
          </p>

          <ul class="social-icons">
            <li>
              <a href="https://github.com/sahil-bhanvadiya">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/sahil_bhanvadiya/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/sahil_bhanvadia?s=09">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sahil-bhanvadiya-7b4094190">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Developer;
