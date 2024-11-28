import { Link } from "react-router-dom";

import React, { useState } from "react";
import Sidebar from "./Sidebar";

import {
  faHome,
  faList,
  faBook,
  faAddressBook,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const user = localStorage.getItem("user_email");

  const [isliked, setIsliked] = useState(false);
  const heartClick = () => {
    setIsliked(!isliked);
  };
  const [sidebarShow, setSidebar] = useState(false);
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "Blog",
      path: "/blog",
      icon: faBook,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: faAddressBook,
    },
    {
      name: "Sign In",
      path: "/signin",
      icon: faRightToBracket,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: faRightToBracket,
    },
  ];
  function closeSidebar() {
    setSidebar(false);
  }
  return (
    <>
      <div className="navbar container">
        <a href="/" className="logo">
          Foodieland
        </a>
        <div className="nav-links">
          {links.map((link) =>
            // Skip the "signin" link if user is not null
            (user !== null && link.name === "Sign In") ||
            (user === null && link.name === "Profile") ? null : (
              <Link to={link.path} key={link.name}>
                {link.name}
              </Link>
            )
          )}
          {/* <a href="#!">Home</a>
                <a href="#!">Recipes</a>
                <a href="#!">Blog</a>
                <a href="#!">Contact</a>
                <a href="#!">Sign In</a> */}
        </div>
        <div className="navbar-icons">
          <a href="#!" className="icon" onClick={heartClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill={isliked ? "red" : "white"}
              stroke="black"
              strokeWidth="2"
              className="heart"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </a>
          <a href="#!" className="profile-photo">
            <img
              src="/images/person.jpg"
              alt="Profile"
              className="author-photo"
            />
          </a>
        </div>
        <div
          onClick={() => setSidebar(!sidebarShow)}
          className={sidebarShow ? "sidebar active" : "sidebar"}
        >
          <div className="straightbar"></div>
          <div className="straightbar"></div>
          <div className="straightbar"></div>
        </div>
      </div>
      {sidebarShow && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
}
