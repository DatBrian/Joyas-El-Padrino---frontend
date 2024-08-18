import React from "react";
import { LinkProps } from "../types";
import { NavLink } from "react-router-dom";
import "./LinkMenu.css"

const LinkMenu: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "MenuButton activeLink" : "MenuButton MenuLink"
        }
        {...props}
      >
        {children}
      </NavLink>
    </>
  );
};

export default LinkMenu;
