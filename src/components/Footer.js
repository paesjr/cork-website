import React from "react";
import { FacebookLogo } from "phosphor-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>CORK bodyboards Copyright &copy; {currentYear}</p>
      <br></br>
      <p>
        Find us on Facebook!{" "}
        <a href="https://www.facebook.com/corkbodyboards">
          <FacebookLogo size={36} />
        </a>
      </p>
    </footer>
  );
}

export default Footer;
