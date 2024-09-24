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
              HDPE tarpaulins are made from premium quality woven HDPE fabric
              laminated with LDPE on both sides. There are various qualities and
              thicknesses available which are made using multiple layers of HDPE
              sandwiched between layers of LDPE on the outside. These types of
              tarpaulins are very rugged and are most suited for applications
              where there is a great deal of wear and tear. These products are
              used in many areas like truck covers, floor lining, packaging,
              swimming pool cover, construction applications, fumigation cover
              and many more. Our customer can avail the products at competitive
              prices.
            </p>
            <h4>Features of HDPE Woven Fabric :</h4>
            <ol>
                <li>High tensile strength</li>
                <li>Light weight easy to handle</li>
                <li>Suited to cover irregular shapes</li>
                <li>Outstanding Flexibility</li>
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
