import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import useArticles from '../../hooks/useArticles';

const Gallery = () => {

    const articles = useArticles()
    console.log(articles[0])


    return (
        <div className='my-12 lg:my-28'>
            <SectionTitle heading='Exclusive' subHeading='Gallery'></SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4 mt-2">
        {articles[0]?.slice(0, 8).map((article, index) => (
          <div
            key={index}
            className={`border rounded-lg overflow-hidden ${
              index === 0
                ? 'lg:col-span-2 lg:row-span-2 transition  hover:scale-105'
                : index  === 1
                ? 'lg:col-span-2 transition  hover:scale-105'
                : index === 2
                ? 'lg:col-span-2 lg:row-span-2 transition  hover:scale-105'
                : index === 3
                ? 'lg:col-span-2 transition  hover:scale-105'
                : index === 4
                ? 'lg:col-span-2 lg:row-span-2 lg:h-[253px] transition  hover:scale-105'
                : index === 5
                ? 'lg:col-span-2 transition  hover:scale-105'
                : 'transition  hover:scale-105'
            }`}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
        </div>
    );
};

export default Gallery;