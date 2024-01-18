// src/components/Footer.js
import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Educert. All rights reserved.</p>
      {/* Additional footer content goes here */}
    </footer>
  );
};

export default Footer;
