import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { toast } from "react-toastify";

const MarathonDetailsPage = () => {
    const marathon = useLoaderData(); // Load marathon data dynamically
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

    // Determine if registration is open based on dates
    useEffect(() => {
        const currentDate = new Date();

        if (currentDate <= new Date(marathon.endRegistrationDate)) {
            setIsRegistrationOpen(true);
        }
    }, [marathon]);

    // Function to calculate the time remaining to the marathon start
    const calculateTimeRemaining = (startDate) => {
        const now = new Date();
        const marathonStartDate = new Date(startDate);
        const timeRemaining = marathonStartDate - now;

        return timeRemaining > 0 ? timeRemaining : 0; // Ensure positive value
    };

    const timeRemaining = calculateTimeRemaining(marathon.marathonStartDate);

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-xl my-10">
            {/* Marathon Title and Banner */}
            <div className="text-center mb-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{marathon.marathonTitle}</h1>
                <img
                    src={marathon.marathonImage}
                    alt={marathon.marathonTitle}
                    className="rounded-md w-full h-72 object-cover"
                />
            </div>

            {/* Marathon Countdown Timer */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Time Left Until Marathon</h2>
                <div className="flex justify-center items-center">
                    <CountdownCircleTimer
                        isPlaying
                        duration={timeRemaining / 1000} // Convert milliseconds to seconds
                        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                        colorsTime={[7, 5, 2, 0]}
                        strokeWidth={10}
                        trailColor="#d3f4f6"
                        size={220}
                        onComplete={() => toast.success('marathon added')}
                    >
                        {({ remainingTime }) => {
                            const days = Math.floor(remainingTime / (3600 * 24));
                            const hours = Math.floor((remainingTime % (3600 * 24)) / 3600);
                            const minutes = Math.floor((remainingTime % 3600) / 60);
                            const seconds = remainingTime % 60;

                            return (
                                <div>
                                    <div className="text-xl font-bold text-gray-800">
                                        {`${days}d ${hours}h  `} <br /> {`${minutes}m ${seconds}s`}
                                    </div>
                                    <div className="text-xl text-gray-500 mt-2">until the marathon <br /> starts</div>
                                </div>
                            );
                        }}
                    </CountdownCircleTimer>
                </div>
            </div>

            {/* Marathon Details */}
            <div className="space-y-4 text-lg text-gray-700">
                <p>
                    <strong className="font-semibold text-gray-800">Location:</strong> {marathon.location}
                </p>
                <p>
                    <strong className="font-semibold text-gray-800">Distance:</strong> {marathon.runningDistance}
                </p>
                <p>
                    <strong className="font-semibold text-gray-800">Description:</strong> {marathon.description}
                </p>
                <p>
                    <strong className="font-semibold text-gray-800">Registration Opens:</strong> {new Date(marathon.startRegistrationDate).toLocaleDateString()}
                </p>
                <p>
                    <strong className="font-semibold text-gray-800">Registration Ends:</strong> {new Date(marathon.endRegistrationDate).toLocaleDateString()}
                </p>
                <p>
                    <strong className="font-semibold text-gray-800">Marathon Date:</strong> {new Date(marathon.marathonStartDate).toLocaleDateString()}
                </p>
                <p>
                    <strong className="font-semibold text-gray-800">Creation Date:</strong> {new Date(marathon.createdAt).toLocaleDateString()}
                </p>
                <p>
                    <strong className="font-semibold text-gray-800">Total Registrations:</strong> {marathon.totalRegistrationCount}
                </p>

                {/* Register Button */}
                <div className="my-10 flex justify-center">
                    {isRegistrationOpen ? (
                        <Link
                            to={`/marathonRegister/${marathon._id}`}
                            className="bg-orange-600 text-white px-8 py-3 rounded-lg text-xl hover:bg-orange-700 transform hover:scale-105 transition-all"
                        >
                            Register Now
                        </Link>
                    ) : (
                        <button
                            disabled
                            className="bg-gray-400 text-white px-8 py-3 rounded-lg text-xl cursor-not-allowed"
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
