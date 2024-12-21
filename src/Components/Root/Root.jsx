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

            <div>

                <Outlet></Outlet>

            </div>

            <div>

                <Footer></Footer>

            </div>

        </div>
    );
};

export default Root;