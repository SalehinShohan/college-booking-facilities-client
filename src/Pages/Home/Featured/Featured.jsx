// import React from 'react';

const Featured = () => {
    return (
        <div className="px-[160px] my-24">
            <div className="text-center mb-12">
                <h1 className='about-heading text-center font-semibold text-3xl mb-3'>Our <span>Facilities</span></h1>
                <p className="tracking-wide">
                    Colleges typically offer a wide range of features and services to support <br /> the academic and personal growth of their students.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center bg-purple-100 p-4 hover:shadow-xl transition-all duration-500 rounded">
                    <h3 className="text-xl text-black font-medium mb-2">Event Spaces and Lecture Halls</h3>
                    <p className="text-[#757575] w-[400px] text-justify mx-auto">
                    These spaces are equipped with modern audio-visual equipment, comfortable seating arrangements, and customizable layouts to accommodate different event sizes.
                    </p>
                </div>
                <div className="text-center bg-purple-100 p-4 hover:shadow-xl transition-all duration-500 rounded">
                    <h3 className="text-xl text-black font-medium mb-2">Hostel Accommodation</h3>
                    <p className="text-[#757575] w-[400px] text-justify mx-auto">
                    The hostels are clean, secure, and well-maintained with separate facilities for male and female participants. Each room is furnished with essential amenities, and Wi-Fi connectivity is available throughout the hostels.
                    </p>
                </div>
                <div className="text-center bg-purple-100 p-4 hover:shadow-xl transition-all duration-500 rounded">
                    <h3 className="text-xl text-black font-medium mb-2">Sports Facilities</h3>
                    <p className="text-[#757575] w-[400px] text-justify mx-auto">
                    Facilities include a well-equipped sports complex with indoor and outdoor courts for basketball, volleyball, badminton, and more. We also have a gymnasium for fitness enthusiasts.
                    </p>
                </div>
                <div className="text-center bg-purple-100 p-4 hover:shadow-xl transition-all duration-500 rounded">
                    <h3 className="text-xl text-black font-medium mb-2">Catering Services</h3>
                    <p className="text-[#757575] w-[400px] text-justify mx-auto">
                    Our catering team provides a diverse menu selection, including vegetarian and non-vegetarian options, to cater to various dietary preferences. From coffee breaks to formal dinners, our team ensures that participants enjoy delicious meals.
                    </p>
                </div>
                <div className="text-center bg-purple-100 p-4 hover:shadow-xl transition-all duration-500 rounded">
                    <h3 className="text-xl text-black font-medium mb-2">Audio-Visual Support</h3>
                    <p className="text-[#757575] w-[400px] text-justify mx-auto">
                    Our AV team assists with setting up projectors, sound systems, microphones, and other necessary equipment. They are available on-site to troubleshoot any technical issues during your event.
                    </p>
                </div>
                <div className="text-center bg-purple-100 p-4 hover:shadow-xl transition-all duration-500 rounded">
                    <h3 className="text-xl text-black font-medium mb-2">Booking Assistance and Event Coordination</h3>
                    <p className="text-[#757575] w-[400px] text-justify mx-auto">
                    From the initial inquiry to the event day, our team will work closely with you to understand your requirements and provide necessary assistance. Our event coordinators will be on-hand during your event to ensure everything runs smoothly.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Featured;