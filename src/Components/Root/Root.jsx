import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>

            <div>

                <NavBar></NavBar>

            </div>

            <div className='w-11/12 md:w-9/12 mx-auto' >

                <Outlet></Outlet>

            </div>

            <div>

                <Footer></Footer>

            </div>

        </div>
    );
};

export default Root;