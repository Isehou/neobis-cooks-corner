import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./side-header.css";
import logo from "../../assets/skillet_cooktop.png";

import { IoSearch } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { RxExit } from "react-icons/rx";

function SideHeader() {
  return (
    <div className="side-header">
      <div className="side-header-wrapper">
        <div>
          <Link
            className="header-route-links"
            to="/sign-up"
            preventScrollReset={true}
          >
            <img className="internal-icons" src={logo} alt="logo" />
          </Link>
          <div className="side-header__divider"></div>
          <div className="">
            <NavLink
              className="header-route-links"
              to="/"
              preventScrollReset={true}
            >
              <FaHome className="internal-icons" />
            </NavLink>
            <NavLink
              className="header-route-links"
              to="/search"
              preventScrollReset={true}
            >
              <IoSearch className="internal-icons" />
            </NavLink>
            <NavLink
              className="header-route-links"
              to="/profile"
              preventScrollReset={true}
            >
              <RxAvatar className="internal-icons" />
            </NavLink>
          </div>
        </div>
        <Link
          className="header-route-links exit-route-links"
          // reventScrollReset={true}
        >
          <RxExit className="internal-icons exit-icon" />
        </Link>
      </div>
    </div>
  );
}

export default SideHeader;
