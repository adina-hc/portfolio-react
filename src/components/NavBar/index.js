import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-green-900">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inlineflex-flex items-center py-4 px-4 mr-4 text-green-100 hover:text-green-200 text-4xl font-bold cursive tracking-wide"
          >
            Adina Henderson
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-3 rounded text-green-200 hover:text-green-500"
          >
            About
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-3 rounded text-green-200 hover:text-green-500"
          >
            Projects
          </NavLink>
          <NavLink
            to="/resume"
            className="inline-flex items-center py-3 px-3 my-3 rounded text-green-200 hover:text-green-500"
          >
            Resume
          </NavLink>
          <NavLink
            to="/contact"
            className="inline-flex items-center py-3 px-3 my-3 rounded text-green-200 hover:text-green-500"
          >
            Contact
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-3">
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
