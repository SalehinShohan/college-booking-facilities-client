// import React from 'react';
import aboutImg from "../../../assets/images/About-img/about-img.jpg";

const About = () => {
  return (
    <div className="my-24 px-24">
      <h1 className="about-heading text-center font-semibold text-3xl mb-12">
        <span>About</span> Us
      </h1>
      <div className="flex items-center justify-center gap-8">
        <img src={aboutImg} />
        <div>
          <h2 className="font-medium text-2xl mb-3">
            Quick Booking Facalities
          </h2>
          <p className="w-[300px] text-justify tracking-wide">
            A fast and efficient online platform that enables students and staff
            to quickly book venues for various events, meetings, or activities.
            The system should offer real-time availability, user-friendly
            interface, and instant confirmation of reservations. A streamlined
            resource booking system that allows users to swiftly reserve college
            equipment, lab resources, and study materials.An expedited system
            for booking hostel accommodations on campus. Students should be able
            to easily view available rooms, choose preferences, and complete the
            booking process promptly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
