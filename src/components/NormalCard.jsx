import React from 'react';
import { Link } from 'react-router-dom';

const NormalCard = ({ data }) => {
    return (
        <div>
            <div className="card bg-base-100 image-full h-[400px] shadow-xl rounded-lg">
                <figure>
                    <img
                        src={data.image}
                        alt="image" />
                </figure>
                <div className="card-body text-white">
                    <h2 className="card-title">{data.title}</h2>
                    <p>Publisher: {data.publisher}</p>
                    <p>type: {data.type}</p>
                    <p>Description: {`${data.description.substring(0, 40)}...`}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary"><Link to={`/details/${data._id}`}>Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NormalCard;