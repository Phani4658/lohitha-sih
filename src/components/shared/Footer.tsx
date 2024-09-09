import React from "react";
import { FaHeart, FaSearch } from "react-icons/fa";
import { FaCartShopping, FaCircleUser, FaHouse } from "react-icons/fa6";

const footerLinks = [
  {
    icon: <FaHouse />,
    displayName: "Home",
    path: "/",
  },
  {
    icon: <FaSearch />,
    displayName: "Categories",
    path: "/categories",
  },
  {
    icon: <FaHeart />,
    displayName: "About",
    path: "/about",
  },
  {
    icon: <FaCartShopping />,
    displayName: "Cart",
    path: "/cart",
  },
  {
    icon: <FaCircleUser />,
    displayName: "Profile",
    path: "/profile",
  }
];

const Footer = () => {
  return (
    <footer className="sticky w-full bottom-0 flex justify-between gap-4 px-10 p-3 bg-[#000000]">
      {footerLinks.map((link) => {
        return (
          <a
            className="flex justify-center items-center flex-col p-2"
            key={link.path}
            href={link.path}
          >
            {link.icon} {link.displayName}
          </a>
        );
      })}
    </footer>
  );
};

export default Footer;
