import React from 'react';
import Banner from '../Banner/banner';
import SixMarathon from './SixMarathon';
import UpcomingMarathons from './UpcomingMarthons';

const Home = () => {
    return (
        <div className='' >

            <div>
                <Banner></Banner>
            </div>

            <div>
                <SixMarathon></SixMarathon>
            </div>

            <div>
                <UpcomingMarathons></UpcomingMarathons>
            </div>

        </div>
    );
};

export default Home;