

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const UpcomingMarathons = () => {
    const upcomingMarathons = [
        {
          id: 1,
          title: 'City Sprint 2025',
          location: 'Dhaka, Bangladesh',
          date: '2025-01-15',
          image: 'https://sma-production-files.s3.eu-west-2.amazonaws.com/uploads/public/media/images/5hlMXjL6r4ClpTrndoUDaLgRszvlU3Qi55ZieIV9/5hlMXjL6r4ClpTrndoUDaLgRszvlU3Qi55ZieIV9.png',
          image2 : 'https://cdn-az.allevents.in/events6/banners/5886152e54b655b472ee9fda43ff7a768f7bbf2db91066a6352eb5a877d5cf63-rimg-w1200-h675-dc73e7f2-gmir?v=1734773785',
        },
        {
          id: 2,
          title: 'River Run 2025',
          location: 'Chittagong, Bangladesh',
          date: '2025-02-10',
          image: 'https://melbournemarathon.com.au/wp-content/uploads/2024/10/Jack-Rayner_MensFullMarathonWinner-scaled.jpg',
          image2 : 'https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2022/01/10/bangabandhu_sheikh_mujib_dhaka_marathon.jpg',
        },
        {
          id: 3,
          title: 'Mountain Dash 2025',
          location: 'Sylhet, Bangladesh',
          date: '2025-03-05',
          image: 'https://www.greatwelshmarathon.co.uk/app/uploads/2023/04/O9R4102.jpg',
          image2 : 'https://runbangladesh.com/wp-content/uploads/2023/10/7b90ce81-4820-43da-9e7a-380dd3f1f262-1024x576.webp',
        },
        {
          id: 4,
          title: 'Ocean Breeze 2025',
          location: 'Cox’s Bazar, Bangladesh',
          date: '2025-03-25',
          image: 'https://toowoombamarathon.com.au/wp-content/uploads/2024/10/Entries-are-open-colour-2000x1200-1.jpg',
          image2 : 'https://media.licdn.com/dms/image/v2/C561BAQHHS0wMRjytGg/company-background_10000/company-background_10000/0/1585486692847/dhakahalfmarathon_cover?e=2147483647&v=beta&t=brs0CiqklNmdU7LMs6WL6m7gEHoYHBq3nsVxui03R0o',
        },
        {
          id: 5,
          title: 'Sunrise Run 2025',
          location: 'Rajshahi, Bangladesh',
          date: '2025-04-12',
          image: 'https://www.newagebd.com/files/records/news/202403/226792_176.jpg',
          image2 : 'https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2022/01/10/bangabandhu_sheikh_mujib_dhaka_marathon.jpg',
        },
        {
          id: 6,
          title: 'Night Marathon 2025',
          location: 'Barisal, Bangladesh',
          date: '2025-05-18',
          image: 'https://cdn.daily-sun.com/public/news_images/2024/03/08/1709911643-daf0c01e45364a94f1765f2eadf8d2b1.jpg',
          image2 : 'https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2022/01/10/bangabandhu_sheikh_mujib_dhaka_marathon.jpg',
        },
      ];

  const [hoveredMarathon, setHoveredMarathon] = useState(null);

  return (
    <div className="bg-[#FBF8EF] my-16 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-[#F96E2A] text-center mb-12"
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
              onMouseEnter={() => setHoveredMarathon(marathon.id)}
              onMouseLeave={() => setHoveredMarathon(null)}
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={hoveredMarathon === marathon.id ? marathon.image2 : marathon.image}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default UpcomingMarathons;
