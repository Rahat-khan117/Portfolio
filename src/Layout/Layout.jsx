import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Layout = () => {
    return (
        <div>
            <div className="fixed left-0 right-0 z-20">
                <Navbar></Navbar>
            </div>
            <div className='pt-[70px] px-5 lg:px-20 sm:px-12 md:px-16 pb-12 min-h-[calc(100vh-240px)]'>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;