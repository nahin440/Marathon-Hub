import React from 'react';
import { motion } from 'framer-motion';
import 'animate.css';

const UpcomingMarathons = () => {
  const upcomingMarathons = [
    {
      id: 1,
      title: 'City Sprint 2025',
      location: 'Dhaka, Bangladesh',
      date: '2025-01-15',
      image: 'https://via.placeholder.com/300x200', // Replace with real image URLs
    },
    {
      id: 2,
      title: 'River Run 2025',
      location: 'Chittagong, Bangladesh',
      date: '2025-02-10',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 3,
      title: 'Mountain Dash 2025',
      location: 'Sylhet, Bangladesh',
      date: '2025-03-05',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 4,
      title: 'Ocean Breeze 2025',
      location: 'Cox’s Bazar, Bangladesh',
      date: '2025-03-25',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 5,
      title: 'Sunrise Run 2025',
      location: 'Rajshahi, Bangladesh',
      date: '2025-04-12',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 6,
      title: 'Night Marathon 2025',
      location: 'Barisal, Bangladesh',
      date: '2025-05-18',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <div className="bg-[#FBF8EF] my-16 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-[#F96E2A] text-center mb-12 animate__animated animate__fadeInDown"
        >
          Upcoming Marathons
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {upcomingMarathons.map((marathon) => (
            <motion.div
              key={marathon.id}
              className="relative bg-white rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={marathon.image}
                  alt={marathon.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Text Content */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {marathon.title}
                </h2>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Location:</span> {marathon.location}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Date:</span> {marathon.date}
                </p>
              </div>

              {/* Glow Border Effect */}
              {/* <div className="absolute inset-0.5 bg-gradient-to-r from-[#ffdecd22] to-[#f9c22a1f] blur-md rounded-lg opacity-80"></div> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default UpcomingMarathons;
