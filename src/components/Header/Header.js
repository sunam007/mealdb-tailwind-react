import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <NavLink
        to="/"
        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        {" "}
        <img className="w-14" src={logo} alt="" />
        <span className="ml-3 text-xl">MealDb</span>
      </NavLink>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <NavLink to="/" className="mr-5 hover:text-gray-900">
          Home
        </NavLink>
      </nav>
      <input
        placeholder="  Search food"
        className="border rounded-md  border-slate-400 shadow-xl shadow-slate-200 text-justify text-black w-64 text-center"
      ></input>
    </div>
  );
};

export default Header;
