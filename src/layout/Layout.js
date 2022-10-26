import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            {/* <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className='md:w-1/5'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                    <div className="md:w-4/5">
                        <Outlet></Outlet>
                    </div>
                </div>
            </section> */}
            
        </div>
    );
};

export default Layout;