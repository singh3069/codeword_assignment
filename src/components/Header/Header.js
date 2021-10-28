import React from "react";
import Navigation from "./Navigation/Navigation";

function Header() {
  return (
    <div className="w-6 h-24 sm:w-full sm:h-headerHeight font-Sora flex items-center justify-between">
      <p className="font-bold">Photon</p>
      <Navigation />
    </div>
  );
}

export default Header;
