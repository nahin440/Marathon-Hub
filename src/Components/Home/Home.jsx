import React from 'react';
import Banner from '../Banner/banner';
import SixMarathon from './SixMarathon';
import UpcomingMarathons from './UpcomingMarthons';
import { Helmet } from 'react-helmet-async';
import ExtraTwo from './ExtraTwo';
import ChartSection from './ChartSection';

const Home = () => {
    return (
        <div className='' >
            <Helmet>
                <title>Home - MarathonHub</title>
            </Helmet>

            <div>
                <Banner></Banner>
            </div>

            <div>
                <SixMarathon></SixMarathon>
            </div>

            <div>
                <UpcomingMarathons></UpcomingMarathons>
            </div>

            <div>
                <ChartSection></ChartSection>
            </div>

            <div>
                <ExtraTwo></ExtraTwo>
            </div>

        </div>
    );
};

export default Home;