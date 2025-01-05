"use client"

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const posts = [
    {
      url: "/",
      title: "Blogs",
    },
    {
      url: "/about",
      title: "About",
    },
    {
      url: "/contact",
      title: "Contact",
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-yellow text-purple body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo */}
        <span className="ml-3 text-5xl text-pink font-bold hover:text-orange">
          myVIEW
        </span>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto text-purple hover:text-orange"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:ml-auto md:mr-auto items-center text-base justify-center w-full md:w-auto`}
        >
          {posts.map((post, index) => (
            <Link
              key={index}
              href={post.url}
              className="block md:inline-block mr-5 hover:text-orange font-semibold"
            >
              {post.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
