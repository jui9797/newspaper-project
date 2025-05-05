
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useContext, useEffect } from 'react';
import Chart from 'react-google-charts';
import { AuthContext } from '../../provider/AuthProvider';
import useArticles from '../../hooks/useArticles';
import useAllUsers from '../../hooks/useAllUsers';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { SiAffinitypublisher } from "react-icons/si";
import { PiArticleNyTimesFill } from "react-icons/pi";
import { PiArticleNyTimesBold } from "react-icons/pi";
import { HiOutlineUsers } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";


const AdminHome = () => {
    const { user } = useContext(AuthContext)
    const [article] = useArticles()
    const [users] = useAllUsers()

    const axiosSecure = useAxiosSecure()
    const { data: articles = [], isPending: loading } = useQuery({
        queryKey: ['article-ratio'],
        queryFn: async () => {

            const res = await axiosSecure.get('/publishers-stats');
            return res.data;
        }
    })
    const axiosPublic = useAxiosPublic()
    const { data: top = [], isPending: loadingState } = useQuery({
        queryKey: ['article-top'],
        // enabled: !!user?.email,
        queryFn: async () => {

            const res = await axiosPublic.get('/topViewed');
            return res.data;
        }
    })
    

    // first chart info
    const data = [
        ["Publisher", "Percentage"],
        ...articles.map((item) => [item.name.trim(), parseFloat(item.percentage)]),
    ];

    const options = {
        title: "Publication Articles Distribution",
        pieHole: 0.4,
        is3D: true,
    };



    //   chart -3
    const formattedData = [
        ["Name", "Percentage"],
        ...articles.map((item) => [item.name, parseFloat(item.percentage)]),
    ];

    const options3 = {
        chart: {
            title: "Publisher Performance",
            subtitle: "Percentage distribution among publishers",
        },
        hAxis: {
            title: "Publisher",
        },
        vAxis: {
            title: "Percentage",
        },
    };

    useEffect(() => {
            AOS.init({
              duration: 1000, 
              easing: "ease-in-out", 
              once: true, 
            });
          }, []);

    return (
        <div className='my-10'>
            <h2 className='text-2xl lora font-bold mb-4 lg:mb-8 text-center dark:text-white'>Welcome {user?.displayName}</h2>
            {
                loading && <>
                <div className='flex justify-center h-screen items-center text-7xl'>
                <span className="loading loading-dots loading-lg"></span>
                </div>
                </>
                
            }
            {/* dynamic stats */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 lora'>
                {/* publisher stats */}
                <div className='h-[120px] bg-indigo-200 p-4 text-center rounded-lg text-gray-800'>
                    <div className='flex justify-center items-center gap-2'>
                        <h2 className='text-2xl font-bold'>All Publishers</h2>
                        <p className='text-2xl'><SiAffinitypublisher /></p>
                    </div>
                    <h2 className='text-2xl font-bold'>{articles.length}</h2>
                </div>
                {/* articles stats */}
                <div className='h-[120px] bg-fuchsia-300 p-4 text-center rounded-lg text-gray-800'>
                    <div className='flex justify-center items-center gap-2'>
                        <h2 className='text-2xl font-bold'>All Articles</h2>
                        <p className='text-2xl'><PiArticleNyTimesFill /></p>
                    </div>
                    <h2 className='text-2xl font-bold'>{article.length}</h2>
                </div>
                {/* users stats */}
                <div className='h-[120px] bg-yellow-200 p-4 text-center rounded-lg text-gray-800'>
                    <div className='flex justify-center items-center gap-2'>
                        <h2 className='text-2xl font-bold'>All Users</h2>
                        <p className='text-2xl'><HiOutlineUsers /></p>
                    </div>
                    <h2 className='text-2xl font-bold'>{users.length}</h2>
                </div>
                {/* top-articles */}
                <div className='h-[120px] bg-blue-200 p-4 text-center rounded-lg text-gray-800'>
                    <div className='flex justify-center items-center gap-2'>
                        <h2 className='text-2xl font-bold'>Latest Articles</h2>
                        <p className='text-2xl'><PiArticleNyTimesBold /></p>
                    </div>
                    <h2 className='text-2xl font-bold'>{top.length}</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='border-2'>


                    <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={"100%"}
                        height={"400px"}
                    />

                </div>

                <div className='border-2'>
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={formattedData}
                        options={options3}
                    />
                </div>
            </div>
            {/* dynamic article table */}
            <div className='my-10 lg:my-20'>
                <h2 className='text-3xl font-bold lora dark:text-white mt-4 mb-8 text-center'>Most Viewed Articles</h2>
                <div className="overflow-x-auto">
                    <table data-aos="zoom-in" className="table p-2 border-2">
                        {/* head */}
                        <thead className='dark:text-white'>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Total View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {top.map((item, idx) => (
                                <tr key={idx} className="bg-blue-400 text-white">
                                    <th>{idx + 1}</th>
                                    <td className='w-10 h-10'>
                                     <img src={item?.image} alt="" /></td>
                                    <td>{item?.title}</td>
                                    
                                    <td>{item?.view}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;