import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const MarathonDetailsPage = () => {
  const marathon = useLoaderData(); // Load marathon data dynamically
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  // Determine if registration is open based on dates
  useEffect(() => {
    const currentDate = new Date();

    if(currentDate <= new Date(marathon.endRegistrationDate)){
        setIsRegistrationOpen(true);
    }
    
  }, [marathon]);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-md shadow-lg my-10">
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
        <p className="text-gray-600">
          <strong>Registration Opens:</strong> {new Date(marathon.startRegistrationDate).toLocaleDateString()}
        </p>
        <p className="text-gray-600">
          <strong>Registration Ends:</strong> {new Date(marathon.endRegistrationDate).toLocaleDateString()}
        </p>
        <p className="text-gray-600">
          <strong>Marathon Date:</strong> {new Date(marathon.marathonStartDate).toLocaleDateString()}
        </p>
        <p className="text-gray-600">
          <strong>Creation Date:</strong> {new Date(marathon.createdAt).toLocaleDateString()}
        </p>
        <p className="text-gray-600">
          <strong>Total Registrations:</strong> {marathon.totalRegistrationCount}
        </p>

        {/* Register Button */}
        <div className="my-10">
          {isRegistrationOpen ? (
            <Link
              to={`/marathonRegister/${marathon._id}`}
              className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700"
            >
              Register Now
            </Link>
          ) : (
            <button
              disabled
              className="bg-gray-400 text-white px-4 py-2 rounded-md cursor-not-allowed"
            >
              Registration Closed
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarathonDetailsPage;
