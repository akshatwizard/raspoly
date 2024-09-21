import React from "react";

export default function page() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="section-title-wrap without-tab mb-5">
          <h2 className="section-title mb-3">UN FIBC Bags</h2>
        </div>
        <div className="row bg-light p-4 rounded-4 row-gap-4">
          <div className="col-lg-8 col-md-7 col-12">
            <p>
              <strong>UN FIBC Bags</strong> are designed for transporting products classified as hazardous materials by the United Nations. These bags adhere to international regulations outlined in the <strong>United Nations Recommendations on the Transport of Dangerous Goods</strong>, commonly referred to as the <strong>Orange Book</strong>. The regulations categorize bulk containers into several types: metal, flexible, rigid plastics, composite, fiberboard, and wooden.
            </p>
            <p>
              Specifically, there are four types of FIBCs made from polypropylene for hazardous materials:
            </p>
            <ul>
              <li>
                <strong>13 H 1</strong>: Woven plastics without a liner or coating.
              </li>
              <li>
                <strong>13 H 2</strong>: Woven plastics with a coating but no inner liner.
              </li>
              <li>
                <strong>13 H 3</strong>: Uncoated woven plastics with an inner liner.
              </li>
              <li>
                <strong>13 H 4</strong>: Woven plastics with both a liner and a coating.
              </li>
            </ul>
            <p>
              UN Bags are further classified based on the hazard level of the materials they carry. Each bag must display the UN symbol, which indicates the associated hazard level (insert table here).
            </p>
            <h4>Certification and Safety</h4>
            <p>
              To ensure safety, bags used for packaging hazardous goods must be manufactured only after obtaining a <strong>UN certificate</strong> from an authorized and notified laboratory. This certification ensures that the bags meet the necessary standards to handle and transport dangerous materials safely.
            </p>
          </div>
          <div className="col-lg-4 col-md-5 col-12"></div>
        </div>
      </div>
    </section>
  );
}
