import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>CORK bodyboards Copyright &copy; {currentYear}</p>
      <br></br>
      <p>Find us on Facebook!</p>
    </footer>
  );
}

export default Footer;
