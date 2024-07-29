'use client'
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 200 },
    items: 1,
    slidesToSlide: 1,
  },
};
export default function OurProducts() {
  return (
    <section className="sectionContainer">
      <div className="container infoContainer">
        <div className="row">
          <div className="section-title-wrap without-tab">
            <h2 className="section-title mb-3">OUR Products</h2>
          </div>

          <div className="col-lg-12">
            <Carousel
              responsive={responsive}
            //   autoPlay={true}
              swipeable={true}
              draggable={true}
              showDots={true}
              infinite={true}
              partialVisible={false}
              dotListClass="custom-dot-list-style"
            >
              <div className="slider text-center" >
                <img src="https://www.raspoly.com/wp-content/uploads/2018/11/1-1024x635.jpg" alt="movie" />
                <h5 className="mt-2">FIBC Bags</h5>
              </div>
              <div className="slider text-center" >
                <img src="https://www.raspoly.com/image/PP-Woven-Bags.jpg" alt="movie" />
                <h5 className="mt-2">PP Woven Bags & Dunnage</h5>
              </div>
              <div className="slider text-center" >
                <img src="https://www.raspoly.com/image/BOPP-Bags.jpg" alt="movie" />
                <h5 className="mt-2">BOPP, PET Food and Shopping</h5>
              </div>
              <div className="slider text-center" >
                <img src="https://www.raspoly.com/wp-content/uploads/2019/02/Block-Bottom-bags-1.jpg" alt="movie" />
                <h5 className="mt-2">AD Star Block Bottoms</h5>
              </div>

              <div className="slider text-center" >
                <img src="https://www.raspoly.com/image/Multi-Filament-Yarn.jpg" alt="movie" />
                <h5 className="mt-2">Multifilament Yarns and threads</h5>
              </div>
              <div className="slider text-center" >
                <img src="https://www.raspoly.com/image/geo.png" alt="movie" />
                <h5 className="mt-2">Geotextiles</h5>
              </div>
              <div className="slider text-center" >
                <img src="https://www.raspoly.com/image/tarpaulins.png" alt="movie" />
                <h5 className="mt-2">Tarpaulins and Lumber wraps</h5>
              </div>
              <div className="slider text-center" >
                <img src="https://www.raspoly.com/image/leno.png" alt="movie" />
                <h5 className="mt-2">Leno bags</h5>
              </div>
              <div className="slider text-center" >
                <img src="https://www.raspoly.com/image/color.png" alt="movie" />
                <h5 className="mt-2">Colour and Pigments</h5>
              </div>
              <div className="slider text-center" >
                <img src="https://www.raspoly.com/image/Masterbatches.jpg" alt="movie" />
                <h5 className="mt-2">Masterbatches</h5>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
