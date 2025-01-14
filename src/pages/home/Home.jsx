import React from 'react';
import Banner from './Banner';
import Publisers from './Publisers';
import Statistic from './Statistic';
import Plans from './Plans';

const Home = () => {
    return (
        <div>
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
        </div>
    );
};

export default Home;