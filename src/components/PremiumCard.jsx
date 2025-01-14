import React from 'react';

const PremiumCard = ({data}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl h-[400px] border-2 flex flex-col justify-between">
                {/* Image Section */}
                <figure className="px-10 pt-10 h-[200px] flex justify-center items-center">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl h-full"
                    />
                </figure>

                {/* Content Section */}
                <div className="text-center flex flex-col flex-grow justify-center gap-2 px-4">
                    <h2 className="text-xl font-bold">{data.title}</h2>
                    <p>Status: {data.status}</p>
                </div>

                {/* Button Section */}
                <div className="p-4">
                    <button className="btn btn-primary ">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PremiumCard;