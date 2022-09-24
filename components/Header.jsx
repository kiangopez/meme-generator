import React from "react";
import Sun from "../images/sun.png";

function Header() {
  return (
    <header className="flex">
      <div className="logo flex">
        <img src={Sun} alt="logo" />
        <h1>Meme Generator</h1>
      </div>
      <p>A simple react project</p>
    </header>
  );
}

export default Header;
