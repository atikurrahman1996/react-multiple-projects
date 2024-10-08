import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "../Link/Link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/about", name: "About", id: 2 },
    { path: "/services", name: "Services", id: 3 },
    { path: "/contact", name: "Contact", id: 4 },
    { path: "/login", name: "Login", id: 5 },
  ];

  return (
    <nav>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <IoClose className="text-4xl"></IoClose>
        ) : (
          <IoMenu className="text-4xl"></IoMenu>
        )}
      </div>
      <ul
        className={`md:flex duration-1000 absolute md:static ${
          open ? "top-16" : "-top-60"
        } bg-yellow-200 px-6 shadow-lg`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
