import React, { useState } from 'react';
import AddMarathon from './AddMarathon';
import MyMarathons from './MyMarathons';
import MyApply from './MyApply';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    // State to control which section is shown
    const [activeSection, setActiveSection] = useState('add-marathon');

    // Function to handle section change
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="min-h-screen mb-16 bg-[#FBF8EF]">
            <Helmet>
                <title>Dashboard - MarathonHub</title>
            </Helmet>
            {/* Header */}
            <header className="bg-[#F96E2A] text-white py-4 shadow-md">
                <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Dashboard Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-10 gap-8">
                    {/* Left Sidebar (3 columns on medium to large screens, 1 column on small screens) */}
                    <div className="sm:col-span-3 lg:col-span-3 bg-white rounded-lg shadow-lg p-4">
                        <div className="space-y-4">
                            {/* <button className="w-full py-2 px-4 bg-[#F96E2A] text-white rounded-md shadow-md">
                Toggle Dark/Light Mode
              </button> */}
                            <div className=" md:min-h-screen space-y-2">
                                <button
                                    onClick={() => handleSectionChange('add-marathon')}
                                    className="block w-full py-2 px-4 bg-gray-100 rounded-md hover:bg-gray-200"
                                >
                                    Add Marathon
                                </button>
                                <button
                                    onClick={() => handleSectionChange('my-marathons')}
                                    className="block py-2 px-4 w-full bg-gray-100 rounded-md hover:bg-gray-200"
                                >
                                    My Marathon List
                                </button>
                                <button
                                    onClick={() => handleSectionChange('my-apply-list')}
                                    className="block py-2 px-4 w-full bg-gray-100 rounded-md hover:bg-gray-200"
                                >
                                    My Apply List
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Content Area (7 columns on large screens, 1 column on small screens) */}
                    <div className="sm:col-span-1 lg:col-span-7">
                        {/* Conditional rendering based on activeSection */}
                        {activeSection === 'add-marathon' && <AddMarathon />}
                        {activeSection === 'my-marathons' && <MyMarathons />}
                        {activeSection === 'my-apply-list' && <MyApply />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
