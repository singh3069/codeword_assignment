import React from "react";
import Navigation from "./Navigation/Navigation";

function Header() {
  return (
    <div className="w-customWidth relative h-headerHeight ">
      <p className="photon">Photon</p>
      <Navigation />
    </div>
  );
}

export default Header;
