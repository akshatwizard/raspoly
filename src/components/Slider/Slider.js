'use client';
import React, { useState } from 'react';

export default function Slider() {
  const texts = [
    'We are a four-decade-old company that employs the latest machines to ensure the best quality at the best price.',
    'We have expertise and required certifications for making up to 100% recycled PP bags, with minimum impact on the strength as compared to virgin bags. We have improved the processes and technology with our focus in this area since the last 15 years. Replast is our trademark and motto.',
    'Bag making needs human hands and we take care of our people so that our customers get flawless stitched bags.',
    'Whatever colour it looks, our bags are always green as they are made by taking care of the environment. We harness the energy of the sun to generate electricity, process water is recycled, rainwater is harvested, and waste is minimised and recycled.',
    'Little leaf is our unique initiative which promotes recycling and invests 100% proceeds in education of children and tree plantation. Visit www.littleleaf.one to know more about this.',
  ];

  const [expanded, setExpanded] = useState(Array(texts.length).fill(false));

  const handleClick = (index) => {
    setExpanded((prev) =>
      prev.map((isExpanded, i) => (i === index ? !isExpanded : isExpanded))
    );
  };

  const truncateText = (text, maxWords = 15) => {
    const wordsArray = text.split(' ');
    return wordsArray.length > maxWords
      ? wordsArray.slice(0, maxWords).join(' ') + '...'
      : text;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div id="carouselExampleAutoplaying" className="carousel slide">
            <div className="carousel-inner">
              {texts.map((text, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? 'active' : ''}`}
                  data-bs-interval="2500"
                >
                  <div className="swiper-slide animation-style-02">
                    <div className="slide-inner style-2">
                      <div className="slide-content text-black">
                        <h2 className="title hide">
                          {index === 0 && 'State of Art Machinery'}
                          {index === 1 && 'Yarn\'s'}
                          {index === 2 && 'Art of Stitching'}
                          {index === 3 && '100% Green Bags'}
                          {index === 4 && 'Giving back to Society'}
                        </h2>
                        <h2 className="title show">
                          {index === 0 && 'Art Machinery'}
                          {index === 1 && 'Yarn\'s'}
                          {index === 2 && 'Art of Stitching'}
                          {index === 3 && '100% Green Bags'}
                          {index === 4 && 'Giving back to Society'}
                        </h2>
                        <p className="short-desc">
                          {expanded[index]
                            ? text
                            : truncateText(text, 13)}
                          <span
                            className="rdmore"
                            onClick={() => handleClick(index)}
                            style={{ color: 'blue', cursor: 'pointer' }}
                          >
                            {expanded[index] ? ' read less' : ' read more'}
                          </span>
                        </p>
                      </div>
                      <div className="slide-img">
                        <img
                          src={`assets/images/banner/slide-${index + 1}.jpg`}
                          alt={`Slide Image ${index + 1}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <img
                src="/assets/images/back.png"
                alt="Previous"
                className="backBtn"
              />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <img src="/assets/images/next.png" alt="Next" className="backBtn" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
