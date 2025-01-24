import React from 'react';
import Banner from './Banner';
import Publisers from './Publisers';
import Statistic from './Statistic';
import Plans from './Plans';

import HelmetTitle from '../../shared/HelmetTitle';
import Gallery from './Gallery';
import Faq from './Faq';

const Home = () => {
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
        </div>
    );
};

export default Home;