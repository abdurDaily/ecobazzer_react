import React from 'react';
import Navbar from '../utils/Navbar';
import Footer from '../utils/Footer';
import { Outlet } from 'react-router';
import Header from '../utils/Header';

const Layout = () => {
    return (
        <div>
            {/* nav */}
            <Navbar />
            <Header />
            {/* main content */}
            <Outlet />
            {/* footer */}
            <Footer />
        </div>
    );
};

export default Layout;