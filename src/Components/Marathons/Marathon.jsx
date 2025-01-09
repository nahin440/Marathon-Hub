import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import { div } from 'framer-motion/client';

const Marathon = ({ marathon }) => {
    const {
        marathonTitle,
        _id,
        location,
        startRegistrationDate,
        endRegistrationDate,
        marathonImage,
    } = marathon;
    // console.log(_id)

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (

        <div>



        <motion.div
            className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-[#F96E2A]"
            data-aos="fade-up"
            whileHover={{ scale: 1.05 }}
            // onClick={() => navigate(`/marathons/${marathonTitle}`)}
        >
            {/* Background Image */}
            <img
                src={marathonImage}
                alt={marathonTitle}
                className="w-full h-64 object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
                <h2 className="text-xl font-bold text-[#F96E2A]">{marathonTitle}</h2>
                <p className="text-sm">
                    <span className="font-medium">Location:</span> {location}
                </p>
                <p className="text-sm">
                    <span className="font-medium">Registration:</span> {startRegistrationDate} - {endRegistrationDate}
                </p>
                <Link to={`/marathons/${_id}`} className='mt-3 py-2 text-sm text-center font-medium bg-[#F96E2A] hover:bg-[#E65B1F] rounded-md transition-colors' >
                    <button
                        // className="mt-3 py-2 text-sm font-medium bg-[#F96E2A] hover:bg-[#E65B1F] rounded-md transition-colors"
                    >
                        See Details
                    </button>
                </Link>
                
            </div>
           
        </motion.div>


        



</div>



    );
};

export default Marathon;
