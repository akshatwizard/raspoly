import React from "react";

export default function page() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="section-title-wrap without-tab mb-5">
          <h2 className="section-title mb-3">sustanibility</h2>
        </div>
        <div className="row row-gap-4">
          <div className="col-12">
            <h1>Sustainability</h1>
            <span
              style={{
                fontWeight: "600",
                marginBottom: "20px",
                display: "block",
              }}
            >
              "Sustainability means thinking about tomorrow, today."
            </span>
            <p>
              Sustainability encompasses various aspects—whether environmental,
              economic, or social—the core principle remains the same: to live
              in a way that ensures future generations can enjoy a life that is
              as good as, if not better than, our own. As a family-run global
              company, we take sustainability seriously, placing great emphasis
              on maintaining and improving the quality of life for future
              generations. Our goal is to increasingly source raw materials from
              recycled or renewable resources.
            </p>
          </div>
        </div>

        <div className="row mt-5 row-gap-3 bg-light p-4 rounded-4">
          <div className="col-lg-8 col-md-6 col-12">
            <h3>Harnessing Solar Energy for a Brighter Future</h3>
            <p>
              Solar energy has established itself as a reliable and sustainable
              alternative to fossil fuels. At RAS, we generate over 4 MW of
              captive solar energy, reducing our reliance on traditional energy
              and fossil fuels while meeting our energy needs in a more
              eco-friendly way.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <img
              src="/assets/images/about/solar.jpeg"
              alt=""
              className="rounded"
            />
          </div>
        </div>

        <div className="row mt-5 row-gap-3 msterbatchRow  bg-light p-4 rounded-4">
          <div className="col-lg-5 col-md-6 col-12">
            <img
              src="/assets/images/about/rain-water.jpeg"
              alt=""
              className="rounded"
            />
          </div>
          <div className="col-lg-7 col-md-6 col-12">
            <h3>Rainwater Harvesting</h3>
            <p>
              At RAS, we are deeply committed to environmental sustainability.
              As part of this effort, we have implemented a rainwater harvesting
              system on our campus, helping to conserve water and promote
              responsible resource management.
            </p>
          </div>
        </div>
        <div className="row mt-5 row-gap-3  bg-light p-4 rounded-4">
          <div className="col-lg-8 col-md-6 col-12">
            <h3>Go Green – Our Vision</h3>
            <p>
              Our management's visionary approach is centered on continuous
              innovation, striving to deliver superior quality products to
              customers worldwide. The blend of seasoned professionals and
              energetic young talent drives ongoing advancements in both
              technique and product delivery.
            </p>
            <p>
              We take great pride in providing high-quality products globally,
              while also fulfilling our responsibility toward environmental
              conservation. As a socially responsible company, we actively
              support the government's Green Initiative, working to safeguard
              Mother Earth. This perfect balance of experience and youthful
              energy distinguishes us from others in the industry.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <img
              src="/assets/images/about/eco.jpeg"
              alt=""
              className="rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
