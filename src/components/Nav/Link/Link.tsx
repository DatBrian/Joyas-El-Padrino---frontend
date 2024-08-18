import { NavLink } from "react-router-dom";
import "./Link.css";
import React from "react";
import { LinkProps } from "../types";

const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "navButton activeLink" : "navButton navLink"
        }
        {...props}
      >
        {children}
      </NavLink>
    </>
  );
};

export default Link;
