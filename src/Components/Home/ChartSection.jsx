import React, { useEffect } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Register components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ChartSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Data for the chart
  const data = {
    labels: ['Marathon 1', 'Marathon 2', 'Marathon 3', 'Marathon 4', 'Marathon 5'],
    datasets: [
      {
        label: 'Participants',
        data: [120, 150, 200, 180, 220],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Section Title */}
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Marathon Participants Overview
      </motion.h2>

      {/* Chart Section */}
      <div
        className="bg-white shadow-lg rounded-lg p-6"
        data-aos="fade-up"
      >
        <div className="relative w-full h-96">
          <Bar data={data} options={options} />
        </div>
      </div>

      {/* Additional Animated Section */}
      <motion.p
        className="text-center text-gray-600 mt-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        This chart displays the number of participants across various marathon events. Stay tuned for more updates!
      </motion.p>
    </div>
  );
};

export default ChartSection;
