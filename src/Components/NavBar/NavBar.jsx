import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

const NavBar = ({ isLoggedIn }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

   

    return (
        <div className="navbar bg-[#FBF8EF] text-[#F96E2A] shadow-lg">
            {/* Navbar Start */}
            <div className="navbar-start">
                <button
                    className="btn btn-ghost md:hidden"
                    onClick={()=>setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                </button>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    MarathonHub
                </Link>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="/marathons">Marathons</Link>
                    </li>
                    {isLoggedIn && (
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    )}
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end  space-x-2">
                {!isLoggedIn ? (
                    <div className='hidden md:block  '>
                        <Link to="/login" className="btn mx-5  btn-outline border-[#F96E2A] text-[#F96E2A]">
                            Login
                        </Link>
                        <Link to="/register" className="btn mr-5  bg-[#F96E2A] text-white border-none">
                            Register
                        </Link>
                    </div>
                ) : (
                    <div className='hidden md:block ' >
                        <div className="flex items-center space-x-4">
                        <FaUserCircle className="text-2xl" />
                        <button className="btn btn-outline border-[#F96E2A] text-[#F96E2A]">
                            Logout
                        </button>
                    </div>
                    </div>
                )}
            </div>

            {/* Slide Menu for Mobile */}
            <div className="md:hidden">
                {isMenuOpen && (
                    <div className="fixed top-0 left-0 w-3/4 h-full bg-[#FBF8EF] shadow-lg z-50">
                        <button
                            className="absolute top-4 right-4 btn btn-ghost"
                            onClick={()=>setIsMenuOpen(!isMenuOpen)}
                        >
                            <FaTimes className="text-2xl text-[#F96E2A]" />
                        </button>
                        <ul className="menu p-4 mt-10 space-y-4">
                            <li>
                                <Link to="/marathons" className=" bg-orange-100 font-bold rounded-none  text-[#F96E2A]" >
                                    Marathons
                                </Link>
                            </li>
                            {isLoggedIn && (
                                <li>
                                    <Link to="/dashboard" className= " bg-orange-100 font-bold rounded-none text-[#F96E2A]" >
                                        Dashboard
                                    </Link>
                                </li>
                            )}
                            {!isLoggedIn && (
                                <>
                                    <li>
                                        <Link to="/login" className= " bg-orange-100 font-bold rounded-none text-[#F96E2A]" >
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/register" className=" bg-orange-100 font-bold rounded-none  text-[#F96E2A]" >
                                            Register
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
