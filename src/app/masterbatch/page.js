import React from "react";

export default function page() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="section-title-wrap without-tab mb-5">
          <h2 className="section-title mb-3">Our masterbatches</h2>
        </div>
        <div className="row ">
          <div className="col-12">
            <div className="row mb-5 bg-light p-4 rounded-4">
              <div className="col-lg-12">
                <h1>Masterbatch</h1>
                <p>
                  <img
                    src="assets/images/banner/masterbatch.webp"
                    alt=""
                    style={{
                      float: "right",
                      width: "335px",
                      height: "200px",
                      objectFit: "cover",
                      objectPosition: "center",
                      borderRadius: "5px",
                    }}
                  />
                  A Masterbatch (MB) is a concentrated blend of solid additives
                  used for coloring (color masterbatch) or enhancing specific
                  properties (additive masterbatch) in plastics. This mixture is
                  created by incorporating colors and additives into a polymer
                  carrier through heat treatment, typically using a high shear
                  mixing extruder. Afterward, the mixture is cooled, cut, and
                  formed into granules using a pelletizer. Masterbatch enables
                  manufacturers to economically color raw polymer during the
                  plastic production process
                </p>
              </div>
            </div>

            <div className="row msterbatchRow">
              <div className="col-lg-4 col-md-6 col-12 mb-5 d-flex align-items-center justify-content-center">
                <img src="/assets/images/small/color.jpeg" className="w-100" />
              </div>
              <div className="col-lg-8 col-md-6 col-12">
                <h3>Color Masterbatch</h3>
                <p>
                  A color masterbatch, also known as a color concentrate, is a
                  granule designed for coloring thermoplastics. It comprises one
                  or more colorants combined with a polymer-specific carrier
                  resin. The formulation of a color masterbatch is referred to
                  as its recipe.
                </p>
              </div>
            </div>

            <div className="row bg-light p-4 rounded-4  mb-5">
              <div className="col-lg-8 col-md-6 col-12 ">
                <h3>UV Masterbatch</h3>
                <p>
                  UV masterbatches safeguard polymers from UV degradation,
                  prevent discoloration, and enhance processability. UV
                  stabilizer masterbatches do not absorb harmful UV radiation,
                  ensuring excellent performance while stabilizing mechanical
                  properties and elongation.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center justify-content-center">
                <img
                  src="/assets/images/small/uv.jpeg"
                  alt=""
                  className="w-100"
                />
              </div>
            </div>

            <div className="row msterbatchRow ">
              <div className="col-lg-4 col-md-6 col-12 mb-5 d-flex align-items-center justify-content-center">
                <img
                  src="/assets/images/small/calcium.jpeg"
                  className="w-100"
                />
              </div>
              <div className="col-lg-8 col-md-6 col-12">
                <h3>Calcium Masterbatch</h3>
                <p>
                  Calcium carbonate masterbatch, also known as filler
                  masterbatch, is a compound made from calcium carbonate,
                  primary polyethylene resin, and various dispersing plastic
                  additives. This product serves as a filler to help reduce
                  costs, enhance productivity, and shape the final product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
