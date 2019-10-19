import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="header">
      <h2>Header</h2>
      <Logo/>
      <Nav/>
    </header>
  );
}
