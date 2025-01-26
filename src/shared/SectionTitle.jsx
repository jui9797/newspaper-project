

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className=' w-1/2 lg:w-2/5 mx-auto flex flex-col justify-center items-center'>
            <p className='text-[#54abe6] inter italic text-xs lg:text-base'>--- {subHeading} ---</p>
           <div className='py-2  border-b-4 lg:py-2 my-2 lg:my-2'>
           <h2 className=' text-xl lg:text-3xl font-semibold lora'>{heading}</h2>
           </div>
        </div>
    );
};

export default SectionTitle;