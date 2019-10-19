import React from "react";
import logo from "../images/logo.png";

export default function Logo() {
  return (
    <div className="logo">
      {/* remember to always include alt tags for images, and images goes in {} not "" */}
      <img src={logo} alt="Logo" />
    </div>
  );
}
