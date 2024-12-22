import { useEffect, useState } from 'react';
import Marathon from './Marathon';

const Marathons = () => {
  const [marathons, setMarathons] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:3000/marathons')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMarathons(data); 
      })
      .catch((error) => {
        console.error("Error fetching marathons:", error); 
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#FBF8EF] px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-[#F96E2A] mb-8">
        All Marathons
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {marathons.length > 0 ? (
          marathons.map((marathon) => (
            <Marathon key={marathon._id} marathon={marathon} />
          ))
        ) : (
          <p className="text-center text-gray-700">No marathons found.</p>
        )}
      </div>
    </div>
  );
};

export default Marathons;
