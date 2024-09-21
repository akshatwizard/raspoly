import React from "react";

export default function page() {
  return (
    <section className="sectionContainer bg-light">
      <div className="container">
        <div className="section-title-wrap without-tab mb-5">
          <h2 className="section-title mb-3">
            Product Safety & Quality Policy{" "}
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <h4>PRODUCT SAFETY AND QUALITY POLICY </h4>
            <p>
              RAS POLYTEX is committed to manufacture & serve all its customers
              and market to which it caters, a safe, authentic and quality
              finished Products. To achieve our commitment RAS POLYTEX will
            </p>
            <ol>
                <li>Ensure implementation & improvement of Current Good Manufacturing Practices (GMP), and Product Safety Management System (PSMS).</li>
                <li>Ensure conformance to all Statutory, Regulatory and Customer requirements in country of manufacture and country of sale.</li>
                <li>Continually review & improve our Management Systems to improve our processes, products and resources to address ever-changing requirement of customers.</li>
                <li>Develop product safety culture and product defense and train all our employees on importance and implementation of Quality, integrity & Product Safety Management Systems. </li>
                <li>Eliminating/ minimizing all possible product safety, quality, and adulteration or substitution related hazards at all stages. </li>
                <li>Communicate all our employees and stake holders our policies & proceduresthrough various means and from time to time.</li>
            </ol>
          </div>
          <div className="col-lg-5">
            <img src="/assets/images/about/policy.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
