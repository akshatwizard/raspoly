import React from "react";

export default function Slider() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2500">
            <div className="swiper-slide animation-style-02">
              <div className="slide-inner style-2" style={{ height: "435px" }}>
                <div className="slide-content text-black">
                  <h2 className="title hide">
                    Art <br /> Machinery
                  </h2>
                  <h2 className="title show">Art Machinery</h2>
                  <p className="short-desc">
                    Equipped with State of Art Machinery
                  </p>
                </div>
                <div className="slide-img">
                  <img
                    src="	https://www.raspoly.com/image/slide3.jpg"
                    alt="Slide Image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2500">
            <div className="swiper-slide animation-style-02">
              <div className="slide-inner style-2 " style={{ height: "435px" }}>
                <div className="slide-content text-black">
                  <h2 className="title hide">
                    Yarn <br /> Handles
                  </h2>
                  <h2 className="title show">Yarn Handles</h2>
                  <p className="short-desc">
                    Achieving Sustainability and Circular Economy
                  </p>
                </div>
                <div className="slide-img">
                  <img src="assets/images/banner/1.jpeg" alt="Slide Image" />
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2500">
            <div className="swiper-slide animation-style-02">
              <div className="slide-inner style-2" style={{ height: "435px" }}>
                <div className="slide-content text-black">
                  <h2 className="title hide">
                    Art of <br /> Webbing
                  </h2>
                  <h2 className="title show">Art of Webbing</h2>
                  <p className="short-desc">Focused Team With Common Vision</p>
                </div>
                <div className="slide-img">
                  <img
                    src="assets/images/banner/slide4.jpeg"
                    alt="Slide Image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2500">
            <div className="swiper-slide animation-style-02">
              <div className="slide-inner style-2" style={{ height: "435px" }}>
                <div className="slide-content text-black">
                  <h2 className="title hide">
                    100% <br /> Green Bags
                  </h2>
                  <h2 className="title show">100% Green Bags</h2>
                  <p className="short-desc">Good Bags with Good Prices</p>
                </div>
                <div className="slide-img">
                  <img
                    src="assets/images/banner/slide-7.jpg"
                    alt="Slide Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prevs"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
          <img
            src="/assets/images/back.png"
            alt=""
            className="backBtn"
            aria-hidden="true"
          />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-nexts"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          {/* <span className="carousel-control-next-icon "  aria-hidden="true"></span> */}
          <img
            src="/assets/images/next.png"
            alt=""
            className="backBtn"
            aria-hidden="true"
          />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
      </div>
    </div>
  );
}
