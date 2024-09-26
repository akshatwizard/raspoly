import React from "react";

export default function page() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="section-title-wrap without-tab mb-5">
          <h2 className="section-title mb-3">To start from where it ends……</h2>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <strong>
              "Embracing a sustainable future, RAS leads the way in recycling
              post-consumer materials, reminding us: 'Reuse your past, recycle
              your present to save your future.'"
            </strong>
          </div>
        </div>

        <div className="row row-gap-4 bg-light p-4 rounded-4">
          <div className="col-lg-2 col-md-5 col-12">
            <img
              src="/assets/images/about/separatingreplast.png"
              alt=""
              className="rounded-3"
            />
          </div>
          <div className="col-lg-8 col-md-7 col-12">
            <span
              style={{
                fontWeight: "600",
                marginBottom: "20px",
                display: "block",
              }}
            >
              Step 1 - Separating
            </span>
            <p>
              We begin by feeding plastics-rich shredder residue into the
              process for size reduction. Next, we meticulously remove
              non-plastic materials such as metal, rubber, wood, glass, fluff,
              foam, textiles, and dirt.
            </p>
          </div>
        </div>

        <div className="row mt-5 row-gap-3 bg-light p-4 rounded-4">
          <div className="col-lg-8 col-md-6 col-12">
            <h3>Step 2 - Cleaning</h3>
            <p>
              In the washing and preparation stage, we eliminate non-target
              plastics. Our polyolefin purification process effectively cleans
              and sorts polypropylene (PP) and polyethylene (PE) polymers, while
              our styrenics purification targets and separates ABS and HIPS
              polymers.
            </p>
          </div>
          <div className="col-lg-2 col-md-6 col-12">
            <img
              src="/assets/images/about/Cleaningreplast.png"
              alt=""
              className="rounded"
            />
          </div>
        </div>

        <div className="row mt-5 row-gap-3 msterbatchRow  bg-light p-4 rounded-4">
          <div className="col-lg-2 col-md-6 col-12">
            <img
              src="/assets/images/about/finishingreplast.png"
              alt=""
              className="rounded"
            />
          </div>
          <div className="col-lg-7 col-md-6 col-12">
            <h3>Step 3 - Finishing</h3>
            <p>
              Once the waste is cleaned, we proceed to formulate, blend, and
              compound the granulates. Following thorough quality checks,
              certification, and packaging, our customers receive a clean and
              sustainable product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
