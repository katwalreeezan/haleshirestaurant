import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  List,
  ShoppingCart,
} from "phosphor-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart} = useSelector((state) => state.cart);
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className="bg-red-600 flex py-1 items-center justify-end px-3 text-white">
        <span className="mx-1">
          <FacebookLogo size={30} />
        </span>
        <span className="mx-1">
          <InstagramLogo size={30} />
        </span>
        <span className="mx-1">
          <TwitterLogo size={30} />
        </span>
      </div>

      <div className="bg-black text-white flex  justify-between items-center  px-2  border-white ">
        <div className="container">
          <img src="./images/halesi.png" alt="logo" className="w-60 h-28 " />
        </div>
        <div className="hidden md:flex text-center items-center  font-poppins uppercase mr-16 ">
          <Link to="/" className="mx-3 hover:text-slate-400 duration-300 ">
            Home
          </Link>
          <Link to="/about" className="mx-3 hover:text-slate-400 duration-300 ">
            About
          </Link>
          <Link to="/food" className="mx-3 hover:text-slate-400 duration-300 ">
            Food
          </Link>
          <Link
            to="/contact"
            className="mx-3 hover:text-slate-400 duration-300 "
          >
            Contact
          </Link>
        </div>
        <div className=" z-10 flex  ">
          <Link to="/cart" className="px-5 hover:text-slate-400 duration-300 ">
            <ShoppingCart size={32} />
            <span className=" text-white absolute top-[55px] right-12 md:absolute md:top-[61px] md:right-4  bg-red-500 rounded-full px-2">
              {cart.length===0?'':cart.length}
            </span>
          </Link>
        </div>
        <div
          onClick={handleClick}
          className={
            nav
              ? "md:hidden overflow-y-hidden  h-1/3 absolute top-28 left-0  bg-zinc-800 w-full text-center"
              : "hidden"
          }
        >
          <ul className="mt-6 text-xl font-poppins uppercase">
            <li className="py-1">
              <Link to="/">Home</Link>
            </li>
            <li className="py-1">
              <Link to="/about">About</Link>
            </li>
            <li className="py-1">
              <Link to="/food">Food</Link>
            </li>
           
            <li className="py-1">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div
          onClick={handleClick}
          className="text-white md:hidden hover:cursor-pointer z-10"
        >
          <List size={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
