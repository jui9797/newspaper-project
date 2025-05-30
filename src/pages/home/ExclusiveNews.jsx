import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SectionTitle from "../../shared/SectionTitle";
import { ImEye } from "react-icons/im";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const ExclusiveNews = () => {
    const axiosPublic = useAxiosPublic()

    const { data: articles = [], isPending: loading } = useQuery({
        queryKey: ['latest-articles'],
        // enabled: !!user?.email,
        queryFn: async () => {

            const res = await axiosPublic.get('/topViewed');
            console.log(res.data)
            return res.data;
        }
    })

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);


    return (
        <div className="my-10 lg:my-28">
            <SectionTitle heading='Latest News' subHeading='Our Latest'></SectionTitle>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    loading && <p>Comming Soon</p>
                }
                {
                    articles.map(article =>
                        <div data-aos="zoom-in" key={article._id} className="card bg-indigo-100 shadow-xl h-[470px] rounded-lg">
                            <figure>
                                <img
                                    className=" h-[220px] w-full"
                                    src={article.image}
                                    alt="Album" />
                            </figure>
                            <div className="card-body h-[250px] dark:bg-purple-200">
                                <h2 className="card-title lora font-bold">{article.title}</h2>
                                <p>{`${article.description.substring(0, 40)}...`}</p>
                                <div className="flex justify-between items-center">
                                    <div>
                                        {/* customized button */}

                                        <button className="btn text-blue-500 border-2 bg-transparent border-blue-500 font-bold hover:bg-blue-500 hover:text-white hover:border-none"><Link to={`/details/${article._id}`}>See More</Link></button>
                                    </div>

                                    <div className="flex gap-2 items-center">
                                        <p className="inline-block transition-transform duration-300 hover:scale-125 hover:text-blue-500 cursor-pointer lg:text-2xl">
                                            <ImEye />
                                        </p>
                                        <p>{article.view}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default ExclusiveNews;