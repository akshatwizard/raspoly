import React from "react";

export default function page() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="section-title-wrap without-tab mb-5">
          <h2 className="section-title mb-3">Sustainability</h2>
        </div>
        <div className="row row-gap-4 bg-light p-4 rounded-4">
          <div className="col-lg-4 col-md-5 col-12">
            <img
              src="/assets/images/about/sustanibility.jpeg"
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

        <div className="row mt-5 row-gap-3  bg-light p-4 rounded-4">
          <div className="col-lg-12 col-md-12 col-12">
            <h3 className="text-center">
              Circular Economy – Round and Round We thrive.{" "}
            </h3>
            <p>
              RAS Group that is committed to sustainability and environmentally
              friendly practices. Since its early beginnings in 1983, RAS
              Polytex has worked to build a production model that minimizes
              waste, maximizes resource efficiency, and aligns with the
              principles of a circular economy.
            </p>

            <h4>1. Recycling and Reuse of Polypropylene.</h4>
            <p>
              RAS Polytex has pioneered the recycling of polypropylene (PP)
              within its operations, which allows for the production of bags and
              flexible packaging solutions from up to 100% recycled materials.
            </p>

            <h4>2. Backward Integration and In-House Processing.</h4>
            <p>
              RAS Polytex has invested in state-of-the-art machinery and
              technology, allowing for complete in-house production. The
              facility is designed for backward integration, which ensures that
              all steps of the production process are controlled and optimized
              for minimal waste.
            </p>
            
            <h4>3. Green Energy Utilization.</h4>
            <p>
              Another vital part of RAS Polytex’s circular economy model is its
              use of green energy. The company’s production is powered by solar
              energy, minimizing carbon emissions and dependency on fossil
              fuels.
            </p>

            <h4>4. Commitment to a Circular Economy Mindset.</h4>
            <p>
              Beyond its recycling processes, RAS Polytex’s commitment to a
              circular economy is evident in its broader corporate philosophy.
            </p>

            <h4>5. Eco-Conscious Product Development.</h4>
            <p>
              All products from RAS Polytex are designed with durability,
              recyclability, and environmental impact in mind. By manufacturing
              high-quality, long-lasting packaging solutions, RAS Polytex helps
              reduce waste associated with disposable packaging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
