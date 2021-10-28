import React from "react";
import './Footer.css';
import Clock from "react-digital-clock";
// import Clock from 'react-live-clock';


const Footer = () => (
  <div className="footer">
    <p className="fp">
    <Clock />
    {/* <Clock format={'HH:mm:ss'} ticking={true}/> */}
    </p>
  </div>
);

export default Footer;