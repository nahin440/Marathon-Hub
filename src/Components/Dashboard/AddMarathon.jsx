import React, { useContext, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for date picker
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddMarathon = () => {
    const { user, setLoading } = useContext(AuthContext);
    const [startRegistrationDate, setStartRegistrationDate] = useState(null);
    const [endRegistrationDate, setEndRegistrationDate] = useState(null);
    const [marathonStartDate, setMarathonStartDate] = useState(null);

    const navigate = useNavigate();

    // Use useEffect to update loading state if user is not available
    useEffect(() => {
        if (!user) {
            setLoading(true);
        }
    }, [user, setLoading]);

    if (!user) {
        return (
            <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
              <div className="w-20 h-20 border-8 border-t-8 border-gray-200 border-t-[#F96E2A] rounded-full animate-spin"></div>
              <p className="mt-4 text-xl font-bold text-[#F96E2A]">Loading...</p>
            </div>
          );
    }

    const { email, displayName } = user;

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const marathonData = {
            marathonTitle: form.title.value,
            startRegistrationDate,
            endRegistrationDate,
            marathonStartDate,
            location: form.location.value,
            runningDistance: form.runningDistance.value,
            description: form.description.value,
            marathonImage: form.marathonImage.value,
            createdAt: new Date(),
            totalRegistrationCount: 0,
            email,
            displayName,
        };

        fetch('http://localhost:3000/marathons', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(marathonData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire('Added!', 'Your Marathon Event has been added.', 'success');
                    navigate('/dashboard/my-marathons');
                }
            });

        console.log(marathonData);
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-[#F96E2A] mb-6">Add Marathon</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Marathon Title */}
                <div className="space-y-2">
                    <label htmlFor="title" className="block font-semibold text-gray-700">
                        Marathon Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F96E2A]"
                        required
                    />
                </div>

                {/* Date Pickers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="block font-semibold text-gray-700">Start Registration Date</label>
                        <DatePicker
                            selected={startRegistrationDate || null}
                            onChange={(date) => setStartRegistrationDate(date)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F96E2A]"
                            dateFormat="yyyy-MM-dd"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block font-semibold text-gray-700">End Registration Date</label>
                        <DatePicker
                            selected={endRegistrationDate || null}
                            onChange={(date) => setEndRegistrationDate(date)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F96E2A]"
                            dateFormat="yyyy-MM-dd"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block font-semibold text-gray-700">Marathon Start Date</label>
                        <DatePicker
                            selected={marathonStartDate || null}
                            onChange={(date) => setMarathonStartDate(date)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F96E2A]"
                            dateFormat="yyyy-MM-dd"
                        />
                    </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                    <label htmlFor="location" className="block font-semibold text-gray-700">
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F96E2A]"
                        required
                    />
                </div>

                {/* Running Distance */}
                <div className="space-y-2">
                    <label htmlFor="runningDistance" className="block font-semibold text-gray-700">
                        Running Distance
                    </label>
                    <select
                        id="runningDistance"
                        name="runningDistance"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F96E2A]"
                        required
                    >
                        <option value="">Select Distance</option>
                        <option value="25k">25k</option>
                        <option value="10k">10k</option>
                        <option value="3k">3k</option>
                    </select>
                </div>

                {/* Marathon Image */}
                <div className="space-y-2">
                    <label htmlFor="marathonImage" className="block font-semibold text-gray-700">
                        Marathon Image URL
                    </label>
                    <input
                        type="text"
                        id="marathonImage"
                        name="marathonImage"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F96E2A]"
                        required
                    />
                </div>

                {/* Description */}
                <div className="space-y-2">
                    <label htmlFor="description" className="block font-semibold text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F96E2A]"
                        rows="4"
                        required
                    ></textarea>
                </div>

                {/* Marathon owner */}
                <div className="space-y-2">
                    <label htmlFor="name" className="block font-semibold text-gray-700">
                        Event Owner
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F96E2A]"
                        readOnly
                        value={user?.displayName || ''}
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="block font-semibold text-gray-700">
                        Event Owner's Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F96E2A]"
                        readOnly
                        value={user?.email || ''}
                    />
                </div>

                {/* Submit Button */}
                <div className="mt-4">
                    <button
                        type="submit"
                        className="w-full py-2 bg-[#F96E2A] text-white rounded-md shadow-md hover:bg-[#F96E2A] focus:outline-none focus:ring-2 focus:ring-[#F96E2A]"
                    >
                        Create Marathon
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddMarathon;
