// import React from 'react';
import { FaSearch } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="px-16 pt-8 banner-img">
            <div className="pt-20 text-right flex items-center justify-center">
                <input type="text" placeholder="Search" className="border border-white rounded-xl px-8 py-3 bg-transparent text-white font-medium inline" />
                <span className="text-white text-xl ml-2 cursor-pointer border border-white p-3 rounded-xl hover:bg-[#f46565] hover:border-[#f46565] transition-all duration-500"> < FaSearch /></span>
            </div>
            <div className="w-[100%] min-h-[100vh] flex items-center justify-center flex-col">
                <h1 className="text-5xl font-bold text-white">Welcome To Our College Booking Facilities</h1>
                <p className="mt-6 font-semibold text-xl text-white">
                    We are working for your admission.
                </p>
            </div>
        </div>
    );
};

export default Banner;