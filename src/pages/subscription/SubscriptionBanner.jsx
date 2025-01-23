import React from 'react';

const SubscriptionBanner = () => {
    return (
        <>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/fFtLKv9/pexels-ron-lach-7968776.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Subscribe Here</h1>
                        <p className="mb-5">
                        Join our community and never miss out on the latest updates, exclusive offers, and curated content delivered straight to your inbox. 
                        </p>
                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubscriptionBanner;