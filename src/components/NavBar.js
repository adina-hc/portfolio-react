import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-black-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-black-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Adina Henderson
          </NavLink>
          <NavLink to="/project">Projects</NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/adina-hc"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://www.facebook.com/ahenderson.career"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/adinahenderson/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 40, width: 40 }}
          />
        </div>
      </div>
    </header>
  );
}
