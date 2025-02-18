
import SectionTitle from '../../shared/SectionTitle';
import { Link } from 'react-router-dom';

const Plans = () => {
    return (

        <div className='my-10 lg:my-20'>
            <SectionTitle heading='our plans' subHeading='exclusive'></SectionTitle>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-4'>
                {/* card-1 */}
                <div className=" p-6 rounded-md shadow-md dark:bg-purple-200 dark:text-gray-900 border-2 border-pink-300 space-y-4 h-[300px]">
                    
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
                   <button className='btn btn-xs  md:btn-md lg:btn-md w-full bg-pink-300'>
                        <Link to='/subscription'>Try free for 1 month</Link>
                    </button>
                    <p><small>For family Tarms should be applied. </small></p>
                   </div>
                    
                </div>
                {/* card-2 */}
                <div className=" p-6 rounded-md shadow-md dark:bg-purple-200 dark:text-gray-900 border-2 border-yellow-300 space-y-4 h-[300px]">
                    
                    <div className='flex justify-between'>
                        <h3 className='lg:text-xl font-bold'>Premium Due</h3>
                        <div>
                        <p className='font-bold'>$ 14.99</p><p>Per month</p>
                        </div>
                    </div>
                    <div className='my-6'>
                        <ul className='list-disc list-inside'>
                            <li>2 premium account</li>
                            <li>Cancel anytime</li>
                            <li>15 hours/month of listenong time from our audiobook subscriber catalog</li>
                        </ul>
                    </div>
                   <div>
                   <button className='btn btn-xs  md:btn-md lg:btn-md w-full bg-yellow-300'>
                        <Link to='/subscription'>Get Premum Due</Link>
                    </button>
                    <p><small>For family Tarms should be applied. </small></p>
                   </div>
                    
                </div>
                {/* card-3 */}
                <div className=" p-6 rounded-md shadow-md dark:bg-purple-200 dark:text-gray-900 border-2 border-blue-300 space-y-4 h-[300px]">
                    
                    <div className='flex justify-between'>
                        <h3 className='lg:text-xl font-bold'>Premium Family</h3>
                        <div>
                        <p className='font-bold'>$ 16.99</p><p>per month</p>
                        </div>
                    </div>
                    <div className='my-6'>
                        <ul className='list-disc list-inside'>
                            <li>up to 6 premium account</li>
                            <li>Cancel anytime</li>
                            <li>15 hours/month of listenong time from our audiobook subscriber catalog</li>
                        </ul>
                    </div>
                   <div>
                   <button className='btn btn-xs  md:btn-md lg:btn-md w-full bg-blue-300'>
                        <Link to='/subscription'>Get Premium family</Link>
                    </button>
                    <p><small>For family Tarms should be applied. </small></p>
                   </div>
                    
                </div>
            </div>
        </div>

    );
};

export default Plans;