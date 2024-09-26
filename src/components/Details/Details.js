import React from "react";

export default function Details() {
  return (
    <section
      className=" my-5 detailsContainer"
      style={{ backgroundImage: 'url("assets/images/banner/background.png")' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-end">
            <div className="detailxBox ">
              <h1>Tradition</h1>
              <p>
                With a history spanning over four decades, our organization has
                grown significantly in size, innovation, and product
                development. Our commitment to quality and customer service has
                been key to our success throughout the years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
