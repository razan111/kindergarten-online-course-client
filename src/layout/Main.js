import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>



            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className='md:w-1/5'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                    <div className="md:w-4/5 md:pl-6">
                        
                    <Outlet></Outlet>
                    </div>
                </div>
            </section>





           

        </div>
    );
};

export default Main;