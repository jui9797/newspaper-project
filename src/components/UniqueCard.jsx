import { Link } from "react-router-dom";


const UniqueCard = ({ data, isAdmin, isPremium }) => {
    return (
        <>
            {
                (isAdmin || isPremium) ? (
                    <div className="grid lg:flex gap-2 bg-base-100 shadow-xl rounded-none border-2 p-2">
                        <div className=" h-[161px] lg:h-[220px]">
                            <img
                                className=" w-full lg:w-[220px] h-full"
                                src={data.image}
                                alt="Album"
                            />
                        </div>
                        <div className="h-[220px] lg:w-2/3 space-y-4">
                            <div className="h-[150px]">
                                <h2 className="font-bold text-blue-500 text-xl mb-2">{data.title}</h2>
                                <p className="text-gray-500 text-base"><span className="font-bold">Description:</span>{`${data.description.substring(0, 30)}...`}</p>
                                <p className="text-gray-500 text-base"><span className="font-bold">Publisher:</span>{data.publisher}</p>
                            </div>
                            <div className="justify-end">
                                <button className="
                                 relative px-4 py-2 text-white  bg-blue-400 rounded-md 
                                  transition-all duration-500 ease-in-out overflow-hidden 
                                     group hover:pr-10
                                         ">
                                    <span className="relative inline-block transition-all duration-500 group-hover:pr-6">
                                    <Link to={`/details/${data._id}`}>Details</Link>
                                    </span>
                                    <span className="absolute opacity-0 right-0 top-1/2 transform -translate-y-1/2 transition-all duration-500 group-hover:opacity-100 group-hover:right-2">
                                        &raquo;
                                    </span>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="text-2xl">Loading</p>
                )
            }

        </>
    );
};

export default UniqueCard;