import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet-async';

const Root = () => {
    return (
        <div>
<Helmet>
    <title>
        Home - MarathonHub
    </title>
</Helmet>
            <div>

                <NavBar></NavBar>

            </div>

            <div className='bg-[#fbf8ef94]' >
                <div className='' >

                    <Outlet></Outlet>

                </div>
            </div>

            <div>

                <Footer></Footer>

            </div>

        </div>
    );
};

export default Root;