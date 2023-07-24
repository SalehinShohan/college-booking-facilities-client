// import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-24 bg-purple-100 px-[160px] h-[300px] flex items-center justify-center flex-col">
            <div className="text-center">
                <h1 className="text-3xl font-bold"><span className="text-[#f46565]">Quick</span>Booking</h1>
                <p className="tracking-wider text-black mt-3">
                Efficient online platform for instant reservations of venues, <br /> equipment, hostel accommodations, events, library resources, and sports facilities.
                </p>
            </div>
            <div className="flex items-center justify-center gap-8 mt-6">
                <span className="text-2xl text-[#f46565] cursor-pointer"> < FaFacebook /> </span>
                <span className="text-2xl text-[#f46565] cursor-pointer"> < FaLinkedin /> </span>
                <span className="text-2xl text-[#f46565] cursor-pointer"> < FaInstagram /> </span>
            </div>
            <p className="mt-8 text-black tracking-wider">&copy;Copyright. All rights reserved 2023.</p>
        </footer>
    );
};

export default Footer;