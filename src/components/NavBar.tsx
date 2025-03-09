"use client";

import Link from "next/link";
import React from "react";
const NavBar = () => {
  return (
    <div className="flex w-fit gap-10 mx-auto font-medim py-4 text-blackish ">
      <Link href="" className="navbar_link ">
        Home
      </Link>
      <Link href="" className="navbar_link ">
        Categories
      </Link>
      <Link href="" className="navbar_link ">
        Mens
      </Link>
      <Link href="" className="navbar_link ">
        Womens
      </Link>
      <Link href="" className="navbar_link ">
        Kids
      </Link>
      <Link href="" className="navbar_link ">
        Blog
      </Link>
    </div>
  );
};

export default NavBar;
