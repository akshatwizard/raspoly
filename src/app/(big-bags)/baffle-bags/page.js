import React from "react";

export default function page() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="row">
          <div className="section-title-wrap without-tab">
            <h2 className="section-title mb-3">Baffle Bags</h2>
          </div>

          <div
            className="col-lg-8  justify-content-center"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h5>Baffle or Form Stable Bags</h5>
            <p>
              Manufactured from 100% virgin polymer which is fabricated into a
              circular woven polypropylene material. Woven polypropylene baffles
              are pre-cut with oval dye-cut holes that are sewn into the
              material diagonally across each corner. Baffle FIBCs (bulk bags)
              can have eight reinforcement sections that are woven into the
              polypropylene loom to attach four rigid cross-corner loops that
              allow the forklift operator to pick up bags without much hassle. A
              section of polypropylene material is attached to the top and
              bottom of the baffle FIBC (bulk bag) to complete its design.
            </p>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-center">
            <div className="image-content d-flex align-items-center justify-content-center">
              <img
                src="/assets/images/FIBC/Baffle.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
