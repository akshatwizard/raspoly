import React from "react";

export default function Card() {
  return (
    <section className="sectionContainer">
      <div className="container cardContainer">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-2 mt-1">
            <div className="detsCard">
              <img src="assets/images/banner/engineer.jpg" alt="" />
              <h1>Industries</h1>
              <button className="Cardbtn">Choose your industry</button>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 mb-2 mt-1">
            <div className="detsCard">
              <img src="assets/images/banner/products.jpg" alt="" />
              <h1>Products</h1>
              <button className="Cardbtn">Choose our Product</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
