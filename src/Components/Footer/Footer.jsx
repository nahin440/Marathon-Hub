import React from 'react';
import logo from '../../assets/marathon-logo.jpg'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-[#ffdfb3e9] text-base-content p-10">
                {/* Logo and Description */}
                <aside className="flex flex-col items-start">
                    <img className='w-16 h-16 rounded-full'  src={logo} alt="" />
                    <p className="text-sm">
                        MarathonHub Ltd.
                        <br />
                        organizing Events since 2006.
                    </p>
                </aside>

                {/* Useful Links */}
                <nav>
                    <h6 className="footer-title">Useful Links</h6>
                    <Link  className="link link-hover"to="/dashboard">Dashboard</Link>
                    <Link  className="link link-hover" to="/marathons"  >Marathon</Link>
                </nav>

                {/* Copyright Information */}
                <section className="text-sm text-center mt-4 w-full">
                    <p>
                        © {new Date().getFullYear()} Zubayer's Assignment. All rights reserved.
                    </p>
                </section>
            </footer>
        </div>
    );
};

export default Footer;
