import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import logo from "../assets/Logo.png";
import { ShopContext } from "../context/Shop-Context";

export const Navbar = () => {
  
  const { cartItems } = useContext(ShopContext);
  // Calculate the total number of items in the cart
  const totalItems = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);

  const [sideNav, setSideNav] = useState(false);

  
  return (
    <div className="text-center text-sm md:text-lg lg:text-xl xl:text-2xl md:p-8 lg:p-12 py-0 mx-auto flex justify-between items-center p-4 h-[200px] bg-green-500 text-white sticky top-0 w-full z-10">
      <div className="cursor-pointer lg:hidden" onClick={() => setSideNav(!sideNav)}>
        <AiOutlineMenu size={25} />
      </div>

      <div className="lg:flex items-center rounded-full px-0 w-[300px] mt-20">
        <img src={logo} alt="imglogo" />
      </div>

      <div className="links">
        <div className="lafka-top-bar-message text-bold lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] text-green-700 sm:hidden md:hidden">
          <span className="text-bold">Order Online or Call Now:</span>
          <a
            href="tel:+447843815032"
            className="bg-white text-green-700 rounded-full text-bold text-sm p-2 mt-10 lg:mt-20 absolute flex items-center"
          >
            <FaPhone size={25} className="text-black py-2 px-1 bg-green-700 rounded-full" />
            <span className="ml-2 hidden lg:flex">+447843815032</span>
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] text-black">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="search meals"
        />
      </div>

      <nav className="hidden lg:flex">
        <ul className="flex">
          <li className="mr-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-4">
            <Link to="/dishes">Dishes</Link>
          </li>
          <li className="mr-4">
            <Link to="/catering">Catering</Link>
          </li>
          <li className="mr-4">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Link to="/cart" className="bg-green-700 text-white md:flex items-center py-5 px-5 rounded-full relative">
        <BsFillCartFill size={32} />
        <div className="absolute top-0 right-5% h-5 w-5 bg-red-700 rounded-full flex justify-center items-center text-white text-1xl object-contain">
          {totalItems}
     
    </div>
    </Link>
     
       

      {sideNav && (
        <>
          <div
            className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
            onClick={() => setSideNav(!sideNav)}
          ></div>

          <div
            className={
              sideNav
                ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
                : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
            }
          >
            <AiOutlineClose
              onClick={() => setSideNav(!sideNav)}
              size={25}
              className="absolute right-4 top-4 cursor-pointer"
            />
            <h2 className="text-2xl p-4">
              Naija <span className="text-green-700 font-bold">Kitchen</span>
            </h2>
            <nav>
              <ul className="flex flex-col p-4 text-gray-900">
                <li className="text-xl py-4 flex cursor-pointer hover:text-green-700">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-xl py-4 flex cursor-pointer hover:text-green-700">
                  <Link to="/dishes">Dishes</Link>
                </li>
                <li className="text-xl py-4 flex cursor-pointer hover:text-green-700">
                  <Link to="/catering">Catering</Link>
                </li>
                <li className="text-xl py-4 flex cursor-pointer hover:text-green-700">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </div >
    
  );
};
