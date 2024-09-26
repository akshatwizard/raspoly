import React from "react";

export default function page() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="section-title-wrap without-tab mb-4">
          <h2 className="section-title mb-3">Geotextiles</h2>
        </div>
        <div className="row row-gap-4 bg-light p-4 rounded-4">
          <div className="col-lg-7 col-md-6 col-12">
            <p>
              Geotextile fabric is designed to enhance and maintain soil
              stability, primarily for agricultural and conservation purposes.
              Unlike weed cloth, which prevents weed growth, geotextile fabric
              effectively stabilizes soil on construction sites and helps
              prevent erosion from stormwater. It also excels in separation,
              filtration, reinforcement, and drainage.
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>
                {" "}
                Available Geo fabrics:-
              </span>
              <ol>
                <li>Geotextile 100 gsm</li>
                <li>Geotextile 150 gsm</li>
                <li>Geotextile 200 gsm</li>
                <li>Geotextile 250 gsm</li>
              </ol>
            </p>
            <h3 className="mt-5">What Is Geotextile Fabric?</h3>
            <p>
              Geotextile woven fabric is an environmentally friendly material
              known for its waterproofing, low water flow rate, and high tensile
              strength. It is widely used in applications such as building
              construction, civil engineering, airport runways, water
              conservancy, petrochemicals, landfill drainage, railway
              embankments, retention pools, and agriculture. Due to its
              excellent physical and mechanical properties, it has a lifespan
              exceeding 100 years.
            </p>
          </div>

          <div className="col-lg-5 col-md-6 col-12">
            <img
              src="/assets/images/small/Geotextile.jpeg"
              alt=""
              className="w-100 rounded-3"
            />
          </div>

          <div className="col-12">
            <h4 className="mt-3">
              Geotextile fabrics are generally categorized into two types:
            </h4>
            <ol type="1">
              <li>
                <span style={{ fontWeight: "600" }}> Woven Geotextiles: </span>
                Known for high tensile strength, these fabrics enhance road
                surface longevity, reduce maintenance costs, and are both
                economical and environmentally friendly.
              </li>
              <li>
                <span style={{ fontWeight: "600" }}>
                  {" "}
                  Non-Woven Geotextiles:{" "}
                </span>
                Used for various applications requiring filtration and drainage.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
