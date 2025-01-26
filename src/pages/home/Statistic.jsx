
import SectionTitle from '../../shared/SectionTitle';
import useAllUsers from '../../hooks/useAllUsers';
import CountUp from 'react-countup';


const Statistic = () => {
    const [users] = useAllUsers()
    
    // console.log(users)
    const premiumUsers = users.filter(item =>item.premiumTaken !== null && item.role !== 'admin')
    // console.log(premiumUsers)


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
                            key={users.length} 
                            end={users.length}
                            duration={20}
                            separator=","
                        />
                    </div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat text-center">
                    <div className="stat-title">Normal Users</div>
                    <div className="stat-value">
                    <CountUp
                            key={users.length} 
                            end={users.length}
                            duration={20}
                            separator=","
                        />
                    </div>
                    
                </div>

                <div className="stat text-center">
                    <div className="stat-title">Premium Users</div>
                    <div className="stat-value">
                    <CountUp
                            key={premiumUsers.length} 
                            end={premiumUsers.length}
                            duration={20}
                            separator=","
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Statistic;