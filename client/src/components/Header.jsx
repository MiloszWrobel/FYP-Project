import React from "react";
import "../App.css";

function Header() {
  return (
    <div className="Header item1">
      <img alt="Logo" src={process.env.PUBLIC_URL + "Logo.png"}></img>
      <p>The quick and easy way to send emails!</p>
    </div>
  );
}

export default Header;
