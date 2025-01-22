import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import usePublisher from '../../hooks/usePublisher';
import Marquee from 'react-fast-marquee';

const Publisers = () => {
    const publisher = usePublisher()
    // console.log(publisher[0])
    const publishers = publisher[0]
    return (
        <div className=''>
            <SectionTitle heading='our publishers' subHeading='trendy'></SectionTitle>

            {/* publisher carosel */}
            <div>
            <Marquee gradient={false} pauseOnHover={true} speed={50}>
            <div className='flex  gap-12 lora mt-4 lg:mt-8'>
                {
                    publishers.map(item=>
                        <div key={item._id} className='bg-white hover:bg-[#488fbf] hover:text-white flex flex-col justify-center items-center  p-4 border-none text-xl text-center'>
                            <img className='w-32 h-20' src={item.image} alt="" />
                 </div>
                    )
                }

               
                
                
                
                
                
                
                
                <div className="hidden lg:block w-4"></div>
            </div>
            </Marquee>
            </div>
        </div>
    );
};

export default Publisers;