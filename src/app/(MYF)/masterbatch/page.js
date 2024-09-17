import React from "react";

export default function page() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row mb-5">
              <div className="col-lg-12"></div>
              <h1>Masterbatch</h1>
              <p>
                <img
                  src="assets/images/banner/masterbatch.webp"
                  alt=""
                  style={{
                    float: "right",
                    width: "300px",
                    height: "200px",
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "5px",
                  }}
                />
                A Masterbatch (MB) is a mixture of solid additive used for
                coloring (color masterbatch) or imparting other properties
                (additive masterbatch) to plastics.
                <br />
                A concentrated mixture obtained by the distribution of colours
                and additives into a polymer carrier by heat treatment and
                in-particularly a high shear mixing extruder is called
                masterbatch. The mixture is then cooled, cut and formed into
                granules via a pelletiser.
                <br />
                Masterbatch allows the processor to colour raw polymer
                economically during the plastics manufacturing process.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6 mb-5 d-flex align-items-center justify-content-center">
                <img src="https://www.raspoly.com/image/masterbatch/color.jpeg" className="w-75"/>
              </div>
              <div className="col-lg-6 mb-5">
                <h3>Color Masterbatch</h3>
                <p>
                  A color masterbatch, or color concentrate, is a granule used
                  for coloring thermoplastics. It consists of one or more
                  colorants and a polymer-specific carrier resin. The
                  composition of a color masterbatch is called its recipe.
                </p>
              </div>

              <div className="col-lg-6 mb-5">
                <h3>UV Masterbatch</h3>
                <p>
                  UV Masterbatches protects the polymers against UV-degradation,
                  avoid discolouration and improves the processibility. UV
                  Stabilizer Masterbatches do not absorb the harmful UV
                  radiations, thus assures excellent performance and stabilized
                  the mechanical properties and elongation.
                </p>
              </div>
              <div className="col-lg-6 mb-5 d-flex align-items-center justify-content-center">
                <img
                  src="https://www.raspoly.com/image/masterbatch/uv.jpeg"
                  alt=""
                  className="w-75"
                />
              </div>


               <div className="col-lg-6 mb-5 d-flex align-items-center justify-content-center">
                <img src="https://www.raspoly.com/image/masterbatch/calcium.jpeg" className="w-75"/>
              </div>
              <div className="col-lg-6 mb-5">
                <h3>Calcium Masterbatch</h3>
                <p>
                  Application of Calcium Carbonate masterbatch – Filler masterbatch. Filler masterbatch is a compound of calcium carbonate, primary Polyethylene resin and other dispersing plastic additives. This product is used as a filler – filler masterbatch to reduce costs, increase productivity and shape the end product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}