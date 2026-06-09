import React from 'react';
import Navbar from '../utils/Navbar';
import Footer from '../utils/Footer';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div>
            {/* nav */}
            <Navbar />
            {/* main content */}
            <Outlet />
            {/* footer */}
            <Footer />
        </div>
    );
};

export default Layout;