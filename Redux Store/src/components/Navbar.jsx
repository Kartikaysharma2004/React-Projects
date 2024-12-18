import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <nav className="bg-[#7549BB] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold max-sm:text-lg">
          Redux Store
        </Link>
        <div>
          <Link
            to="/"
            className="mx-2 hover:text-gray-300 font-semibold max-sm:text-sm"
          >
            Home
          </Link>
          <Link
            to="/cart"
            className="mx-2 hover:text-gray-300 font-semibold bg-black text-white p-2 rounded-lg max-sm:text-sm"
          >
            Cart - {items.length}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
