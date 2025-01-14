import React from 'react';
import useArticles from '../../hooks/useArticles';
import NormalCard from '../../components/NormalCard';
import PremiumCard from '../../components/premiumCard';

const AllArticles = () => {
    const [article] = useArticles()
    return (
        <div>
            <h2 className='text-3xl mb-4'>Articles are here</h2>
            <div className='flex gap-4 flex-wrap'>
                {/* filter by publisher */}
            <div>
                    <select
                        className="select select-bordered w-full max-w-xs"
                        name="publisher"
                        
                        defaultValue="" // Default value for placeholder
                    >
                        <option className='text-gray-700' value="" disabled>
                            Select publisher
                        </option>
                        <option className='text-[#0AB99D]' value="easy">Easy</option>
                        <option className='text-[#0AB99D]' value="medium">Medium</option>
                        <option className='text-[#0AB99D]' value="hard">Hard</option>
                    </select>
                </div>
                {/* filter by tag */}
                <div>
                    <select
                        className="select select-bordered w-full max-w-xs"
                        name="tag"
                        
                        defaultValue="" // Default value for placeholder
                    >
                        <option className='text-gray-700' value="" disabled>
                            Select tag
                        </option>
                        <option className='text-[#0AB99D]' value="easy">Easy</option>
                        <option className='text-[#0AB99D]' value="medium">Medium</option>
                        <option className='text-[#0AB99D]' value="hard">Hard</option>
                    </select>
                </div>
                {/* filter by title */}
                <div className="join">
                    <input className="input input-bordered join-item w-[140px] lg:w-[200px]"  placeholder="Search by title"/>
                    <button className='btn join-item border-none text-white ml-2 bg-[#0AB99D]'>Search</button>
                </div>

            </div>
            {/* article grid */}
            <div className='my-10 lg:my-20 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {article.map((data) => {
                    return data.status === 'premium' ? (
                        <PremiumCard key={data._id} data={data} />
                    ) : (
                        <NormalCard key={data._id} data={data} />
                    );
                })}
            </div>
        </div>
    );
};

export default AllArticles;