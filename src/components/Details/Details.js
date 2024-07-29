import React from "react";

export default function Details() {
  return (
    <section
      className=" my-5 detailsContainer"
      style={{ backgroundImage: 'url("assets/images/banner/background.jpg")' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-end">
            <div className="detailxBox ">
              <h1>Tradition</h1>
              <p>
                With a history of more than four decades. It's a much bigger and
                broader organization in term of innovation and developing new
                products. A commitment with quality and services towards our
                customers has made a journey successful over the year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
