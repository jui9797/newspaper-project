import React from 'react';
import { Link } from 'react-router-dom';

const PremiumCard = ({data}) => {
    return (
        <div className='h-[400px] flex flex-col border-2 rounded-lg p-2 shadow-xl'>
           <div className='h-[200px] p-2 mb-2'>
            <img className='h-full w-full rounded-lg' src={data.image} alt="" />
           </div>
           <div className='flex flex-col space-y-2 pb-2 px-2'>
            <h2 className='font-bold'>{data.title}</h2>
            <p><span className='font-bold'>Publisher:</span>{data.publisher}</p>
            <p><span className='font-bold'>Type:</span>{data.type}</p>
            <p><span className='font-bold'>Description:</span>{`${data.description.substring(0, 40)}...`}</p>
            <button className='btn'><Link to={`/details/${data._id}`}>Details</Link></button>
           </div>
        </div>
    );
};

export default PremiumCard;