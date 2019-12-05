import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className={props.landing ? "bg-transparent" : "bg-white border border-gray-200"} style={{position:`fixed`, top:0, left:0, right:0}}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link className={`font-bold ${props.landing ? "text-white" : "text-blue-900"} text-2xl lg:text-4xl`} to="/">
          HYKE
        </Link>
        {
          props.landing ? null : 
          <div className="flex justify-center items-center block w-full">
            <div className="mx-4 w-3/4 lg:w-3/4 xl:w-4/5">
              <input className="w-full px-8 py-2 border border-gray-200 rounded-full bg-gray-200" placeholder="Search for a course!"/>
            </div>
          </div>
        }
        <div className="block lg:hidden">
          <button className="flex items-center align-centers px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex">
            <li>
              <Link className={`px-4 font-bold ${props.landing ? "text-white" : "text-blue-900"}`} to="/">Home</Link>
            </li>
            <li>
              <Link className={`px-4 ${props.landing ? "text-white" : "text-blue-900"} hover:text-gray-800`} to="/about">About</Link>
            </li>
            <li>
              <Link className={`px-4 ${props.landing ? "text-white" : "text-blue-900"} hover:text-gray-800`} to="/course">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;