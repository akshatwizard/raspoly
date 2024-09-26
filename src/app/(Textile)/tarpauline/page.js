import React from "react";

export default function page() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="section-title-wrap without-tab mb-4">
          <h2 className="section-title mb-3">Tarpaulins</h2>
        </div>
        <div className="row row-gap-4 bg-light p-4 rounded-4">
          <div className="col-lg-8 col-md-6 col-12">
            <p>
              HDPE tarpaulins are crafted from high-quality woven HDPE fabric,
              laminated with LDPE on both sides. Available in various qualities
              and thicknesses, these tarpaulins consist of multiple layers of
              HDPE sandwiched between outer layers of LDPE. They are
              exceptionally durable, making them ideal for applications that
              experience significant wear and tear. Common uses include truck
              covers, floor linings, packaging, swimming pool covers,
              construction applications, fumigation covers, and more. Our
              customers can access these products at competitive prices.
            </p>
            <h4>Features of HDPE Woven Fabric :</h4>
            <ol>
              <li>High tensile strength</li>
              <li>Light weight easy to handle</li>
              <li>Suited to cover irregular shapes</li>
              <li>Excellent flexibility</li>
            </ol>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <img
              src="/assets/images/small/trampauline.jpeg"
              alt=""
              className="rounded-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
