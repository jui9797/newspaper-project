import React, { useState } from 'react';
import useArticles from '../../hooks/useArticles';
import NormalCard from '../../components/NormalCard';
import PremiumCard from '../../components/premiumCard';
import HelmetTitle from '../../shared/HelmetTitle';

const AllArticles = () => {
    const [filters, setFilters] = useState({
   publisher:'', tag:'', title:''
    })

    const [article, loading] = useArticles(filters)

  const handleFilterChange =(e)=>{
    setFilters((prev)=>({
        ...prev,[e.target.name]:e.target.value
    }))
  }

  const handleSearch =(e)=>{
    setFilters((prev)=>({...prev, title:e.target.value}))
  }

  const approvedArticles = article.filter(data => data.status === 'approved');

    return (
        <div className='my-10'>
            <HelmetTitle title="All Article || Trendify"></HelmetTitle>
            <h2 className='text-3xl mb-4'>Articles are here</h2>
            <div className='flex gap-4 flex-wrap'>
                {/* filter by publisher */}
            <div>
                    <select
                        className="select select-bordered w-full max-w-xs"
                        name="publisher"
                        onChange={handleFilterChange}
                        value={filters.publisher}
                        defaultValue="" // Default value for placeholder
                    >
                        <option className='text-gray-700' value="" disabled>
                            Select publisher
                        </option>
                        <option className='' value="Green Planet Journal">Green Planet Journal</option>
                        <option className='' value="Tech World Daily">Tech World Daily </option>
                        <option className='' value="Wellness Weekly">Wellness Weekly</option>
                        <option className='' value="Nature Explorers">Nature Explorers</option>
                    </select>
                </div>
                {/* filter by tag */}
                <div>
                    <select
                        className="select select-bordered w-full max-w-xs"
                        name="tag"
                        onChange={handleFilterChange}
                        value={filters.tag}
                        defaultValue="" // Default value for placeholder
                    >
                        <option className='text-gray-700' value="" disabled>
                            Select tag
                        </option>
                        <option className='' value="science">science</option>
                        <option className='' value="health">health</option>
                        <option className='' value="social">social</option>
                        <option className='' value="politics">politics</option>
                    </select>
                </div>
                {/* filter by title */}
                <div className="join">
                    <input className="input input-bordered join-item w-[140px] lg:w-[200px]" type='text' onChange={handleSearch} placeholder="Search by title"/>
                    <button className='btn join-item border-none text-white ml-2 bg-blue-400'>Search</button>
                </div>

            </div>

           {
            approvedArticles.length === 0? <p className='text-4xl text-center my-10'>No Article ...</p> : ''
           }
           {
            loading? <span className="loading loading-dots loading-lg"></span>: ''
           }

            {/* article grid */}
            <div className='my-10 lg:my-20 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {approvedArticles.map((data) => {
                    return data.type === 'premium' ? (
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