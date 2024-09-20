import React from "react";

export default function page() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="row">
          <div className="section-title-wrap without-tab">
            <h2 className="section-title mb-3">Single Loop/ Two Loop bags</h2>
          </div>

          <div className="col-lg-8 mt-5">
            <h5>Single Loop/ Two Loop bags</h5>
            <p>
              1 & 2 Loop FIBC provides optimal efficiency, is cost- effective,
              easy-to-handle container for agriculture, fertilizers, seed,
              cement, lime, fish feed and other applications. Ease of handling,
              self-supporting single or double point of lift
              <br />
              <br />
              Superior cost-to-weight ratio of up to 20% afforded by this
              design, compared with 4 loop styles, typically enables
              transportation of 1000kg of products with up to 0.5kg less plastic
              packaging weight.
            </p>
          </div>
          <div className="col-lg-4 d-flex mt-5 align-items-center justify-content-center">
            <div className="image-content d-flex align-items-center justify-content-center">
              <img
                src="https://www.raspoly.com/image/fibc/oneloop.jpeg"
                alt=""
              />
              <img
                src="https://www.raspoly.com/image/fibc/twoloop.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
