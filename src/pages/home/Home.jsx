import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Publisers from './Publisers';
import Statistic from './Statistic';
import Plans from './Plans';

import HelmetTitle from '../../shared/HelmetTitle';
import Gallery from './Gallery';
import Faq from './Faq';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    // const [showModal, setShowModal] = useState(false);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShowModal(true);
    //     }, 10000); 

       
    //     return () => clearTimeout(timer);
    // }, []);

    // const handleNavigate = () => {
    //     setShowModal(false); 
    //     navigate('/subscription'); 
    // };


    return (
        <div>
            <HelmetTitle title="Home || Trendify"></HelmetTitle>
            <Banner></Banner>
            <div className='my-10 lg:my-20'>
            <Publisers></Publisers>
            </div>
            <div className='my-10 lg:my-20'>
            <Statistic></Statistic>
            </div>
            <div className='my-10 lg:my-20'>
            <Plans></Plans>
            </div>
            <Gallery></Gallery>
            <Faq></Faq>

            {/* Modal */}
            {/* {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h2 className="text-lg font-semibold mb-4">Subscribe to Trendify!</h2>
                        <p className="mb-6">Do not miss out on exclusive content. Subscribe now!</p>
                        <button
                            onClick={handleNavigate}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Go to Subscription
                        </button>
                    </div>
                </div>
            )} */}
        </div>
    );
};

export default Home;