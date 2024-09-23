import React from "react";

export default function page() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="section-title-wrap without-tab mb-5">
          <h2 className="section-title mb-3">Flexibags (Flexitanks)</h2>
        </div>
        <div className="row bg-light p-4 rounded-4 row-gap-4">
          <div className="col-lg-8 col-md-7 col-12">
            <p>
              A <strong>flexibag</strong> or <strong>flexitank</strong> is a large, flexible, and collapsible container used for the bulk transportation of <strong>non-hazardous liquids</strong> and <strong>powdered substances</strong>. These bags are typically made from multiple layers of polyethylene and have an outer layer of woven polypropylene for added strength. Flexibags are commonly used in the shipping industry, as they fit inside standard 20-foot shipping containers, converting them into bulk liquid transportation units.
            </p>
            <p>
              Flexibags are commonly used for transporting liquids such as:
            </p>
            <ul>
              <li><strong>Edible oils</strong> (e.g., vegetable oil, palm oil)</li>
              <li><strong>Wine and other beverages</strong></li>
              <li><strong>Juices</strong></li>
              <li><strong>Liquid chemicals</strong> (non-hazardous)</li>
              <li><strong>Water</strong></li>
              <li><strong>Syrups and sauces</strong></li>
            </ul>
            <p>
              For powdered substances, they can transport products like sugar, flour, or other granular substances.
            </p>
            <h4>Advantages of Flexibags:</h4>
            <ul>
              <li><strong>Cost-efficiency</strong>: Compared to traditional barrels or drums, they can carry a larger volume, reducing the overall cost of transportation.</li>
              <li><strong>Space-saving</strong>: When empty, they can be collapsed, taking up very little space.</li>
              <li><strong>Environmental benefits</strong>: Flexibags are generally more sustainable as they reduce the need for single-use packaging.</li>
            </ul>
            <p>
              However, one drawback is that they are usually designed for single-use and may need to be properly disposed of or recycled after use.
            </p>
          </div>
          <div className="col-lg-4 col-md-5 col-12">
          <img src="/assets/images/FIBC/flexi.jfif" alt="" className="rounded-2 w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
