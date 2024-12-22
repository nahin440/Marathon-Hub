import React, { useEffect, useState } from 'react';
import Marathon from '../Marathons/Marathon';


const SixMarathon = () => {
  const [marathons, setMarathons] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/limit')
      .then((res) => res.json())
      .then((data) => setMarathons(data))
      .catch((error) => console.error('Error fetching marathons:', error));
  }, []);

  return (
    <div className="bg-[#FBF8EF] py-8 my-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#F96E2A] text-center mb-6">
          Featured Marathons
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {marathons.map((marathon) => (
            <Marathon key={marathon._id} marathon={marathon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SixMarathon;
