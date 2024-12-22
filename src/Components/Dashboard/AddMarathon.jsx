import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for date picker

const AddMarathon = () => {
  const [marathonDetails, setMarathonDetails] = useState({
    title: '',
    startRegistrationDate: new Date(),
    endRegistrationDate: new Date(),
    marathonStartDate: new Date(),
    location: '',
    runningDistance: '',
    description: '',
    marathonImage: '',
    createdAt: new Date(),
    totalRegistrationCount: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMarathonDetails({
      ...marathonDetails,
      [name]: value,
    });
  };

  const handleDateChange = (date, field) => {
    setMarathonDetails({
      ...marathonDetails,
      [field]: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to backend)
    console.log('Marathon Created:', marathonDetails);
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
            value={marathonDetails.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F96E2A]"
            required
          />
        </div>

        {/* Date Pickers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block font-semibold text-gray-700">Start Registration Date</label>
            <DatePicker
              selected={marathonDetails.startRegistrationDate}
              onChange={(date) => handleDateChange(date, 'startRegistrationDate')}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F96E2A]"
              dateFormat="yyyy-MM-dd"
            />
          </div>

          <div className="space-y-2">
            <label className="block font-semibold text-gray-700">End Registration Date</label>
            <DatePicker
              selected={marathonDetails.endRegistrationDate}
              onChange={(date) => handleDateChange(date, 'endRegistrationDate')}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F96E2A]"
              dateFormat="yyyy-MM-dd"
            />
          </div>

          <div className="space-y-2">
            <label className="block font-semibold text-gray-700">Marathon Start Date</label>
            <DatePicker
              selected={marathonDetails.marathonStartDate}
              onChange={(date) => handleDateChange(date, 'marathonStartDate')}
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
            value={marathonDetails.location}
            onChange={handleChange}
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
            value={marathonDetails.runningDistance}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F96E2A]"
            required
          >
            <option value="">Select Distance</option>
            <option value="25k">25k</option>
            <option value="10k">10k</option>
            <option value="3k">3k</option>
          </select>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label htmlFor="description" className="block font-semibold text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={marathonDetails.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F96E2A]"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Marathon Image */}
        <div className="space-y-2">
          <label htmlFor="marathonImage" className="block font-semibold text-gray-700">
            Marathon Image
          </label>
          <input
            type="file"
            id="marathonImage"
            name="marathonImage"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F96E2A]"
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
