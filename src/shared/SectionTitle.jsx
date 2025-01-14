import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='w-1/5 mx-auto flex flex-col justify-center items-center'>
            <p className='text-[#D99904] inter italic'>--- {subHeading} ---</p>
           <div className='py-2 border-t-4 border-b-4 lg:py-4 my-2 lg:my-4'>
           <h2 className='text-2xl font-semibold'>{heading}</h2>
           </div>
        </div>
    );
};

export default SectionTitle;