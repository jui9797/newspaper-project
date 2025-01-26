import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import useArticles from '../../hooks/useArticles';

const Gallery = () => {

    const articles = useArticles()
    // console.log(articles[0])


    return (
        <div className='my-12 lg:my-28'>
            <SectionTitle heading='Exclusive' subHeading='Gallery'></SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
        {articles[0]?.slice(0, 8).map((article, index) => (
          <div
            key={index}
           
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transition  hover:scale-105"
            />
          </div>
        ))}
      </div>
        </div>
    );
};

export default Gallery;