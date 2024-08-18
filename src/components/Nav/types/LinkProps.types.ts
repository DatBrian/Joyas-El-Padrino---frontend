import { NavLinkProps } from "react-router-dom";

export type LinkProps = NavLinkProps & {
  children: React.ReactNode;
};
