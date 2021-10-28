import React from "react";

function Footer() {
  return (
    <div className="w-full h-40 bg-primaryBlack flex gap-96 justify-around  font-Sora  items-center text-white">
      <div className=" ">
        <p className="font-bold text-lg mb-3.5 ">Photon</p>
        <p className="text-xs w-32 h-5">Copyright 2020 - site title</p>
      </div>
      <div className="gap-8 flex text-xs">
        <ul>
          <li>About</li>
          <li className="my-1.5">News</li>
          <li>FAQs</li>
        </ul>
        <ul>
          <li>Themes</li>
          <li className="my-1.5">Services</li>
          <li>Privacy and Terms</li>
        </ul>
        <ul>
          <li>Support</li>
          <li className="my-1.5">Docs</li>
          <li>Connect</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
