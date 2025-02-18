
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const NormalCard = ({ data }) => {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: "ease-in-out", 
          once: true, 
        });
      }, []);

    return (
        <div data-aos="zoom-in" className='h-[400px] flex flex-col border-2 rounded-lg p-2 shadow-xl bg-blue-300'>

            <div className='h-[200px]'>
                <img className='md:h-[187px] h-full w-full' src={data.image} alt="" />
            </div>
            <div className='flex flex-col space-y-1 lg:space-y-2 dark:bg-purple-200  px-2 h-[200px]'>
                <h2 className='font-bold'>{data.title}</h2>
                <p><span className='font-bold'>Publisher:</span>{data.publisher}</p>
                <p><span className='font-bold'>Type:</span>{data.type}</p>
                <p><span className='font-bold'>Description:</span>{`${data.description.substring(0, 30)}...`}</p>

                <button
                   
                    className="btn btn-xs lg:btn-md md:py-1 bg-white text-blue-400 hover:bg-transparent hover:text-white border-white border-2 transition-all duration-300 ease-in-out"
                >
                    <Link to={`/details/${data._id}`}>Details</Link>
                </button>



            </div>
        </div>
    );
};

export default NormalCard;