import Marquee from "react-fast-marquee";
import SectionTitle from "../../shared/SectionTitle";
import useArticles from "../../hooks/useArticles";

const Authors = () => {
    const articles = useArticles();
   

    return (
        <div className="my-10 lg:my-28">
            <SectionTitle heading='Our Authors' subHeading='Editor Choice' />

            <Marquee gradient={false} pauseOnHover={true} speed={80}>
                <div className="flex gap-8 lg:gap-12 font-inter mt-6">
                    {
                        articles[0]?.slice(0, 7).map((article, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-center items-center  p-4 text-xl text-center"
                            >
                                <img className="w-32 h-32 rounded-full border-2 " src={article.
                                    authorPhoto} alt="" />
                                    <p className="dark:text-white">{article.authorName}</p>
                            </div>
                        ))
                    }

                   
                </div>
            </Marquee>
        </div>
    );
};

export default Authors;
