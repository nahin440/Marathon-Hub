import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut, loading } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('Log out successful'))
            .catch((error) => console.log(error));
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar bg-[#fff8e4] text-[#F96E2A] shadow-lg">
            {/* Navbar Start */}
            <div className="navbar-start">
                <button
                    className="btn btn-ghost md:hidden"
                    onClick={toggleMenu}
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
                    {user && (
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    )}
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end flex items-center space-x-4">
                {loading ? (
                    <span className="loading loading-ring loading-lg"></span>
                ) : user ? (
                    <div className="flex items-center space-x-4">
                        <img
                            src={user.photoURL || 'https://via.placeholder.com/150'}
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full border-2 mr-10 md:mr-4 border-[#F96E2A]"
                        />
                        <button
                            onClick={handleLogOut}
                            className="btn btn-outline hidden md:block border-[#F96E2A] text-[#F96E2A]"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="hidden md:flex space-x-4">
                        <Link
                            to="/login"
                            className="btn btn-outline border-[#F96E2A] text-[#F96E2A]"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="btn bg-[#F96E2A] text-white border-none"
                        >
                            Register
                        </Link>
                    </div>
                )}
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed top-0 left-0 w-3/4 h-full bg-[#FBF8EF] shadow-lg z-50">
                    <button
                        className="absolute top-4 right-4 btn btn-ghost"
                        onClick={toggleMenu}
                    >
                        <FaTimes className="text-2xl text-[#F96E2A]" />
                    </button>
                    <ul className="menu p-4 mt-10 space-y-4">
                        <li>
                            <Link
                                to="/marathons"
                                className="bg-orange-100 font-bold rounded-none text-[#F96E2A]"
                            >
                                Marathons
                            </Link>
                        </li>
                        {user ? (
                            <>
                                <li>
                                    <Link
                                        to="/dashboard"
                                        className="bg-orange-100 font-bold rounded-none text-[#F96E2A]"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={handleLogOut}
                                        className="bg-orange-100 font-bold rounded-none text-[#F96E2A]"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        to="/login"
                                        className="bg-orange-100 font-bold rounded-none text-[#F96E2A]"
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/register"
                                        className="bg-orange-100 font-bold rounded-none text-[#F96E2A]"
                                    >
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
