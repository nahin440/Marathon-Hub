import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import RegistrationForm from "../RegistrationForm/RegistrationForm";


const MarathonDetailsPage = () => {
  const marathon = useLoaderData();
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Determine if registration is open
  useEffect(() => {
    const currentDate = new Date();
    setIsRegistrationOpen(
      currentDate >= new Date(marathon.startRegistrationDate) &&
      currentDate <= new Date(marathon.endRegistrationDate)
    );
  }, [marathon]);

  

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-md shadow-lg mt-10">
      {/* Marathon Title and Banner */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{marathon.marathonTitle}</h1>
        <img
          src={marathon.marathonImage}
          alt={marathon.marathonTitle}
          className="rounded-md w-full h-64 object-cover"
        />
      </div>

      {/* Marathon Details */}
      <div className="space-y-4">
        <p className="text-gray-600">
          <strong>Location:</strong> {marathon.location}
        </p>
        <p className="text-gray-600">
          <strong>Distance:</strong> {marathon.runningDistance}
        </p>
        <p className="text-gray-600">
          <strong>Description:</strong> {marathon.description}
        </p>

        {/* Total Registration Count */}
        <p className="text-gray-600">
          <strong>Total Registrations:</strong> {marathon.totalRegistrationCount}
        </p>

        {/* Register Button */}
        {isRegistrationOpen && (
          <Link to={`/marathonRegister/${marathon._id}`} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" >
          <button
            
            
          >
            Register Now
          </button>
          </Link>
        )}
      </div>

    
    </div>
  );
};

export default MarathonDetailsPage;
