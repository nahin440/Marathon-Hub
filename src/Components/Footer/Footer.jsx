import React from 'react';
import logo from '../../assets/marathon-logo.jpg'

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-orange-200/20 text-base-content p-10">
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
                    <a className="link link-hover" href="#about-us">About Us</a>
                    <a className="link link-hover" href="#services">Services</a>
                    <a className="link link-hover" href="#contact">Contact</a>
                    <a className="link link-hover" href="#privacy-policy">Privacy Policy</a>
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
