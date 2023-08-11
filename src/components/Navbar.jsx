import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi"

// import Logo from "../assets/image/healtlogo.png";

// import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
    };

    const smoothScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className="fixed w-full h-[80px] top-0 left-0 flex justify-between items-center bg-[#1B2732] lg:px-24 px-5  text-green-400 text-md font-semibold z-10 shadow-lg ">
            <div className="flex gap-3">
                <span className="m-auto">
                    <GiHealthNormal />
                </span>
                <p>Patient <span className="text-[#FF6000]">Extrm</span></p>
            </div>

            {/*Menu*/}

            <ul className="hidden gap-5 md:flex transition-transform duration-700 ease-in-out ">
                <a href="#Home" onClick={(e) => smoothScroll(e, '#Home')} className="hover:border-b border-[#FF6000] cursor-pointer hover:opacity-50 transition-transform duration-700">Home</a>
                <a href="#Why" onClick={(e) => smoothScroll(e, '#Why')} className="hover:border-b border-[#FF6000] cursor-pointer hover:opacity-50 transition-transform duration-700">Why Choose Us</a>
                <a href="#About" onClick={(e) => smoothScroll(e, '#About')} className="hover:border-b border-[#FF6000] cursor-pointer hover:opacity-50 transition-transform duration-700">About</a>
                <a href="#Services" onClick={(e) => smoothScroll(e, '#Services')} className="hover:border-b border-[#FF6000] cursor-pointer hover:opacity-50 transition-transform duration-700">Services</a>
                <a href="#Team" onClick={(e) => smoothScroll(e, '#Team')} className="hover:border-b border-[#FF6000] cursor-pointer hover:opacity-50 transition-transform duration-700">Our Team</a>
                <a href="#Contact" onClick={(e) => smoothScroll(e, '#Contact')} className="hover:border-b border-[#FF6000] cursor-pointer hover:opacity-50 transition-transform duration-700">Contact</a>
            </ul>

            {/*Hamburger*/}
            <div onClick={handleClick} className="z-10 md:hidden">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/*Mobile Menu*/}
            <ul
                className={
                    !nav
                        ? "hidden"
                        : "absolute top-0 left-0 w-[100%] h-screen bg-[#1B2732] flex flex-col justify-center items-center text-lg"
                }
            >
                <li className="py-6 ">Home</li>
                <li className="py-6 ">About</li>
                <li className="py-6 ">Services</li>
                <li className="py-6 ">Our Team</li>
                <li className="py-6 ">Contact</li>
            </ul>

            {/*Social Icons*/}
        </div>
    );
};
export default Navbar;
