"use client";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export function Navbar() {
  return (
    <nav>
      <NavMobile />
      <NavDesktop />
    </nav>
  );
}
