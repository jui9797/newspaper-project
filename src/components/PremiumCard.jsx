
import { Link} from 'react-router-dom';
import { FaCrown } from "react-icons/fa6";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const PremiumCard = ({ data, isPremium, isAdmin }) => {

useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: "ease-in-out", 
          once: true, 
        });
      }, []);

    
    return (
        <div data-aos="zoom-in" className='h-[400px] flex flex-col border-2 rounded-lg p-2 shadow-xl relative'>
            <div className='absolute text-3xl text-amber-500'>
            <FaCrown />
            </div>
            <div className='h-[200px]'>
                <img className='md:h-[187px] h-full w-full' src={data.image} alt="" />
            </div>
            <div className='flex flex-col space-y-1 lg:space-y-2 dark:bg-purple-200  px-2 h-[200px]'>
                <h2 className='font-bold'>{`${data.title.substring(0, 55)}`}</h2>
                <p><span className='font-bold'>Publisher:</span>{data.publisher}</p>
                <p><span className='font-bold'>Type:</span>{data.type}</p>
                <p><span className='font-bold'>Description:</span>{`${data.description.substring(0, 30)}...`}</p>
                {/* Animated Button */}
        {isPremium || isAdmin ? (
          <button
            
            className="btn btn-xs lg:btn-md md:py-1 bg-blue-400 hover:text-blue-500 text-white transition-all duration-300 ease-in-out"
          >
            <Link to={`/details/${data._id}`}>Details</Link>
          </button>
        ) : (
          <motion.button
            disabled
            className="btn btn-xs lg:btn-md md:py-1 bg-gray-400 text-white cursor-not-allowed"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
          >
            <Link to={`/details/${data._id}`}>Details</Link>
          </motion.button>
        )}

            </div>
        </div>
    );
};

export default PremiumCard;