import React from "react";

export default function page() {
  return (
    <>
      <section className="sectionContainer">
        <div className="container">
        <div className="section-title-wrap without-tab mb-5">
          <h2 className="section-title mb-3">We at raspoly</h2>
        </div>
          <div className="row">
            <div className="col-lg-8 col-md-6 col-12">
              {/* <h1>About US</h1> */}
              <span
                style={{
                  display: "block",
                  margin: "10px 0",
                  fontWeight: "600",
                }}
              >
                "We are large in size, richer in experience, and boundless in
                our thinking."
              </span>
              <p>
                At RAS Polytex Pvt. Ltd., we started with a mission to provide
                fully integrated, world-class packaging solutions globally. With
                over four plus decades of experience, we are not merely a
                manufacturer of FIBCs (Flexible Intermediate Bulk Containers)
                but a broader, forward-thinking organization driven by
                innovation and research. Our management's visionary approach
                fuels continuous innovation, ensuring we deliver superior
                quality products to clients worldwide. The synergy of
                experienced professionals and young, enthusiastic talent drives
                us toward ongoing advancements in both techniques and product
                delivery.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <img
                src="https://www.raspoly.com/image/new/6.jpg"
                alt=""
                className="rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sectionContainer bg-light">
        <div className="container">
          <div className="row row-gap-5 justify-content-between">
            <div className="col-lg-8 col-md-6 col-12">
              <h1>Visionary Leadership</h1>
              <span
                style={{
                  display: "block",
                  margin: "10px 0",
                  fontWeight: "600",
                }}
              >
                "The best way to predict the future is to create it."
              </span>
              <p>
                Our management's visionary leadership consistently drives
                innovation to ensure the delivery of top-quality products to
                customers across the globe. RAS Group holds the Export House and is recognized as a
                government-certified ISO 9001, 14001 & 22000 company. As a certified
                manufacturer of high-quality FIBCs, we meet the evolving needs
                of industries worldwide.
              </p>
              <p style={{ fontWeight: "600" }}>
                "Visionary leaders have a clear, long-term vision for the future
                and inspire their followers to embrace it."
              </p>
              <p>
                By keeping this philosophy at the core of our operations and
                working diligently, RAS Group has set benchmarks not only in
                business but also in its social initiatives. We have received
                numerous awards in recognition of our contributions to society.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <img
                src="https://www.raspoly.com/image/new/3.jpg"
                alt=""
                className="rounded"
              />
            </div>

            {/* <div className="col-lg-3 col-md-6 col-12">
              <img
                src="https://www.raspoly.com/image/new/3.jpg"
                alt=""
                className="rounded"
              />
            </div> */}
            <div className="col-lg-3 col-md-6 col-12">
              <img
                src="https://www.raspoly.com/image/new/4.jpg"
                alt=""
                className="rounded"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <img
                src="https://www.raspoly.com/image/new/5.jpg"
                alt=""
                className="rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
