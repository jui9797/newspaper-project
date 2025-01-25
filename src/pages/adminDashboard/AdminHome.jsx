import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Chart from 'react-google-charts';


const AdminHome = () => {

    const axiosSecure = useAxiosSecure()
    const { data: article = [], isPending: loading } = useQuery({
        queryKey: ['article'],
        queryFn: async () => {

            const res = await axiosSecure.get('/publishers-stats');
            return res.data;
        }
    })
    console.log(article)

    const data = [
        ["Publisher", "Percentage"],
        ...article.map((item) => [item.name.trim(), parseFloat(item.percentage)]),
      ];
    
      const options = {
        title: "Publication Articles Distribution",
        pieHole: 0.4, // Optional: for a donut chart effect
        is3D: true,
      };


    return (
        <div className='my-10'>
            <h2>Admin home</h2>
            {
                loading && <span className="loading loading-dots loading-lg"></span>
            }
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='border-2'>
                    <h3>Pie Chart</h3>

                    <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={"100%"}
                        height={"400px"}
                    />

                </div>
                <div className='border-2'>
                    <h3>Rechart</h3>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;