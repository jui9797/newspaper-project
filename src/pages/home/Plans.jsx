import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import { Link } from 'react-router-dom';

const Plans = () => {
    return (

        <div className='my-10 lg:my-20 border-2'>
            <SectionTitle heading='our plans' subHeading='exclusive'></SectionTitle>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-4'>
                {/* card-1 */}
                <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 border-2 border-pink-300 space-y-4 h-[400px]">
                    <button className='btn btn-xs lg:btn bg-pink-300 lg:bg-pink-300'>Free for 1 month</button>
                    <div className='flex justify-between'>
                        <h3 className='lg:text-xl font-bold'>Premium Individual</h3>
                        <div>
                        <p className='font-bold'>FREE</p><p>for 1 month</p>
                        </div>
                    </div>
                    <div className='my-6'>
                        <ul className='list-disc list-inside'>
                            <li>1 premium account</li>
                            <li>Cancel anytime</li>
                            <li>15 hours/month of listenong time from our audiobook subscriber catalog</li>
                        </ul>
                    </div>
                   <div>
                   <button className='btn w-full bg-pink-300'>
                        <Link to='/subscription'>Try free for 1 month</Link>
                    </button>
                    <p><small>Free for 1 month, then $10.99 per month after. Offer only available if you have not tried premium before. Terms apply. </small></p>
                   </div>
                    
                </div>
                {/* card-2 */}
                <div className=" p-6 rounded-md shadow-md border-2 border-amber-300 h-[400px]">
                    
                    <div className='flex justify-between mb-10'>
                        <h3 className='lg:text-xl font-bold'>Premium Due</h3>
                        <div>
                            <p className='font-bold'>$14.99</p>
                            <p>Per month</p>
                        </div>
                    </div>
                    <div className='my-3 mb-14'>
                        <ul className='list-disc list-inside'>
                            <li>2 premium account</li>
                            <li>Cancel anytime</li>
                            <li>15 hours/month of listening time from our audiobooks subscriber catalog(plan manager only)</li>
                        </ul>
                    </div>
                    <div className=''>
                        <button className='btn w-full bg-amber-300'><Link to='/subscription'>Get Premium Due</Link></button>
                        <p><small>For couples who reside at the same address. Terms apply</small></p>
                    </div>
                </div>
                {/* card-3 */}
                <div className=" p-6 rounded-md shadow-md border-blue-400 border-2 h-[400px]">
                    <div className='flex justify-between'>
                        <h3 className='lg:text-xl font-bold'>Premium Family</h3>
                        <div>
                            <p>$16.99</p>
                            <p>per month</p>
                        </div>
                    </div>
                    <div className='my-6'>
                        <ul className='list-disc list-inside'>
                            <li>up tp 6 premium or kids accounts</li>
                            <li>block explicit music</li>
                            <li>Access to spotify kids</li>
                            <li>Cancel anytime</li>
                            <li>15 hours/month of listening time from our audiobooks subscriber catalog (plan manager only)</li>
                        </ul>
                    </div>
                    <div className=''>
                        <button className='btn bg-blue-300 w-full'><Link to='/subscription'>Get Premium family</Link></button>
                        <p><small>For up to 6 family residing at the same address Tarms apply</small></p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Plans;