import React from 'react';

const NormalCard = ({ data }) => {
    return (
        <div>
            <div className="card bg-base-100 image-full h-[400px] shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{data.title}</h2>
                    <p>status: {data.status}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NormalCard;