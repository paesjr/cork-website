import React from "react";
import { NavLink } from "react-router-dom";
import "../style/TopNav.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import logo from "../images/logo.png";

const TopNav = () => {
  const menuData = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/products",
      name: "Products",
    },
    {
      path: "/calculator",
      name: "Size Calculator",
    },
    {
      path: "/quote",
      name: "Get a Quote",
    },
    {
      path: "/contact",
      name: "Contact",
    },
    {
      path: "/blog",
      name: "Blog",
    },
    {
      path: "/store",
      name: "Store",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <nav>
      <img src={logo} alt="Logo" style={{ width: "auto", height: "80px" }} />
      <div className="bars">
        <FaBars onClick={toggle} />
      </div>
      <div className="menu" style={{ left: isOpen ? "-100%" : "0" }}>
        {menuData.map((item) => (
          <NavLink to={item.path} key={item.name} onClick={toggle}>
            <div className="list_item">{item.name}</div>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default TopNav;
