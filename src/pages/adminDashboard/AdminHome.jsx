
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Chart from 'react-google-charts';


const AdminHome = () => {

    const axiosSecure = useAxiosSecure()
    const { data: article = [], isPending: loading } = useQuery({
        queryKey: ['article-ratio'],
        queryFn: async () => {

            const res = await axiosSecure.get('/publishers-stats');
            return res.data;
        }
    })
    // console.log(article)

    // first chart info
    const data = [
        ["Publisher", "Percentage"],
        ...article.map((item) => [item.name.trim(), parseFloat(item.percentage)]),
    ];

    const options = {
        title: "Publication Articles Distribution",
        pieHole: 0.4, 
        is3D: true,
    };

    // chart 2 
    const data2 = [
        ["Publisher", "%"],
        ...article.map((item) => [item.name.trim(), parseFloat(item.percentage)]),
    ];

    const options2 = {
        title: "Publication Articles Distribution",
        hAxis: { title: "Publisher", titleTextStyle: { color: "#333" } },
        vAxis: { minValue: 0 },
        chartArea: { width: "70%", height: "70%" },
    };

    //   chart -3
    const formattedData = [
        ["Name", "Percentage"], 
        ...article.map((item) => [item.name, parseFloat(item.percentage)]),
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


    return (
        <div className='my-10'>
            <h2 className='text-2xl lora font-bold mb-4 text-center'>Admin home</h2>
            {
                loading && <span className="loading loading-dots loading-lg"></span>
            }
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
                    <Chart chartType="AreaChart" data={data2} options={options2} />;
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
        </div>
    );
};

export default AdminHome;