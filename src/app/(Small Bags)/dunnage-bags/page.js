import React from "react";

export default function page() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="row">
          <div className="section-title-wrap without-tab">
            <h2 className="section-title mb-3">Dunnage Bags</h2>
          </div>

          <div className="col-12 mt-5">
            <h3>Dunnage Bags</h3>
            <div className="row">
              <div className="col-lg-8 col-md-9 col-12">
                <p>
                  Dunnage bags are very easy to work with. They inflate rapidly
                  with the use of an inflator using compressed air. Dunnage bags
                  are very safe to use for both the shipping and receiving end
                  of the transportation. They are waterproof. The cushions are
                  easy to install and are inflated by compressed air often by
                  means of an outlet in the truck’s compressed air system or
                  compressors.
                </p>
                <h5>FEATURES:</h5>
                <ol type="I">
                  <li>Load restraint using air pressure</li>
                  <li>
                    Effective and safe control of loads whilst transportation
                  </li>
                  <li>
                    Extremely quick and efficient holding and release of load
                    thus saving time
                  </li>
                  <li>No damage to the load being inflated</li>
                  <li>Lower weight means lower transport cost</li>
                  <li>
                    Suppleness of air accommodates irregularities of load. Acts
                    as a shock absorber in load shifting.
                  </li>
                  <li>
                    After inflating, no load movement during transportation,
                    safety, saving light, easy to use and no damage to the cargo
                  </li>
                </ol>
              </div>
              <div className="col-lg-4 col-md-3 col-12">
                <img
                  src="/assets/images/small/dunnage.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
