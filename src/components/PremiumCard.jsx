
import { Link} from 'react-router-dom';

const PremiumCard = ({ data, isPremium, isAdmin }) => {
    // const navigate = useNavigate()
    // if(isPremuiumLoading){
    //     return <h1>Loading...!</h1>
    // }
    // if(!isPremium){
    //     return <Navigate to='/subscription'></Navigate>
    // }
    return (
        <div className='h-[400px] flex flex-col border-2 rounded-lg p-2 shadow-xl'>
            <div className='h-[200px]'>
                <img className='md:h-[187px] h-full w-full rounded-lg' src={data.image} alt="" />
            </div>
            <div className='flex flex-col space-y-1 lg:space-y-2  px-2 h-[200px]'>
                <h2 className='font-bold'>{data.title}</h2>
                <p><span className='font-bold'>Publisher:</span>{data.publisher}</p>
                <p><span className='font-bold'>Type:</span>{data.type}</p>
                <p><span className='font-bold'>Description:</span>{`${data.description.substring(0, 30)}...`}</p>
                {
                    isPremium || isAdmin ?
                        <button className='btn btn-xs lg:btn-md md:py-1 bg-blue-400 text-white'><Link to={`/details/${data._id}`}>Details</Link></button>
                        :
                        <button disabled className='btn btn-xs lg:btn-md md:py-1 bg-blue-400 text-white'><Link to={`/details/${data._id}`}>Details</Link></button>
                }

            </div>
        </div>
    );
};

export default PremiumCard;