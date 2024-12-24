import { useEffect, useState } from 'react';
import Marathon from './Marathon';

const Marathons = () => {
    const [marathons, setMarathons] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc'); // Default sorting order

    useEffect(() => {
        fetch(`http://localhost:3000/marathons?sort=${sortOrder}`) // Pass the sort order to the backend
            .then((res) => res.json())
            .then((data) => {
                setMarathons(data);
            })
            .catch((error) => {
                console.error("Error fetching marathons:", error);
            });
    }, [sortOrder]); // Refetch when sortOrder changes

    return (
        <div className="min-h-screen bg-[#FBF8EF] px-4 py-8">
            <h1 className="text-3xl font-bold text-center text-[#F96E2A] mb-8">
                All Marathons
            </h1>
            
            {/* Sorting Dropdown */}
            <div className="text-center mb-6">
                <label htmlFor="sortOrder" className="mr-2 font-medium text-gray-600">
                    Sort by:
                </label>
                <select
                    id="sortOrder"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-300"
                >
                    <option value="asc">Newest First</option>
                    <option value="desc">Oldest First</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {marathons.length > 0 ? (
                    marathons.map((marathon) => (
                        <Marathon key={marathon._id} marathon={marathon} />
                    ))
                ) : (
                    <div className='min-h-screen flex justify-center items-center text-orange-500'>
                        <span className="loading loading-ring loading-lg"></span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Marathons;
