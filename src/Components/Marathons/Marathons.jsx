import { useEffect, useState } from 'react';
import Marathon from './Marathon';
import { Helmet } from 'react-helmet-async';

const Marathons = () => {
    const [marathons, setMarathons] = useState([]);
    const [sortOrder, setSortOrder] = useState('desc'); // Default to 'desc'

    const fetchMarathons = (order) => {
        console.log("Fetching marathons with order:", order); // Debugging
        fetch(`https://marathon-server.vercel.app/marathons?order=${order}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched Data:", data); // Debugging
                setMarathons(data);
            })
            .catch((error) => {
                console.error("Error fetching marathons:", error);
            });
    };
    
    
    

    useEffect(() => {
        fetchMarathons(sortOrder);
    }, [sortOrder]);

    const toggleSortOrder = () => {
        setSortOrder((prevOrder) => (prevOrder === 'desc' ? 'asc' : 'desc'));
    };

    return (
        <div className="min-h-screen bg-[#FBF8EF] px-4 py-8">
            <Helmet>
                <title>Marathons - MarathonHub</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center text-[#F96E2A] mb-8">
                All Marathons
            </h1>
            <div className="flex justify-end mb-4">
                <button
                    className="px-4 py-2 bg-orange-500 text-white rounded shadow hover:bg-orange-600"
                    onClick={toggleSortOrder}
                >
                    Sort by Date: {sortOrder === 'desc' ? 'Newest First' : 'Oldest First'}
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {marathons.length > 0 ? (
                    marathons.map((marathon) => (
                        <Marathon key={marathon._id} marathon={marathon} />
                    ))
                ) : (
                    <div className="min-h-screen flex justify-center items-center text-orange-500">
                        <span className="loading loading-ring loading-lg"></span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Marathons;
