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
                  Dunnage bags are very user-friendly and inflate quickly with
                  an inflator connected to a compressed air source. They provide
                  a safe solution for both shipping and receiving processes and
                  are waterproof. The cushions are easily installed and inflated
                  using compressed air, often sourced from the truck's
                  compressed air system or compressors.
                </p>
                <h5>FEATURES:</h5>
                <ol type="I">
                  <li>Load restraint using air pressure.</li>
                  <li>
                    Safe and effective load control during transportation.
                  </li>
                  <li>
                    Rapid and efficient inflation and deflation, saving time.
                  </li>
                  <li>Inflating the bags does not damage the cargo.</li>
                  <li>Lightweight design reduces transportation costs.</li>
                  <li>
                    The flexibility of air accommodates load irregularities and
                    acts as a shock absorber during shifting.
                  </li>
                  <li>
                    Once inflated, they prevent load movement during transit,
                    ensuring safety and protection for the cargo.
                  </li>
                </ol>
              </div>
              <div className="col-lg-4 col-md-3 col-12">
                <img src="/assets/images/small/dunnage.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
