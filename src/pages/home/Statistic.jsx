import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import useAllUsers from '../../hooks/useAllUsers';
import CountUp from 'react-countup';

const Statistic = () => {
    const [users] = useAllUsers()
    // console.log(users)


    return (
        <div className='my-10 lg:my-20'>
            <SectionTitle heading='statistics' subHeading='statistics says'></SectionTitle>

            {/* stats */}

            <div className="stats stats-vertical lg:stats-horizontal shadow w-full my-6 lg:my-10">
                <div className="stat text-center">
                    <div className="stat-title">All Users</div>
                    <div className="stat-value">
                        {/* CountUp Component */}
                        <CountUp
                            key={users.length} // Ensures re-animation when users.length changes
                            end={users.length}
                            duration={20}
                            separator=","
                        />
                    </div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat text-center">
                    <div className="stat-title">Normal Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat text-center">
                    <div className="stat-title">Premium Users</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    );
};

export default Statistic;