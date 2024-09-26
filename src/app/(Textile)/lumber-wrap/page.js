import React from "react";

export default function LumberWrap() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="section-title-wrap without-tab mb-5">
          <h2 className="section-title mb-3">Lumber Wrap</h2>
        </div>
        <div className="row row-gap-4 bg-light p-4 rounded-4">
          <div className="col-lg-8 col-md-7 col-12">
            <p>
              Lumber wrap is a protective covering used for storing and
              transporting lumber and other wood products. Typically made from
              polyethylene or other durable materials, lumber wrap serves
              several key purposes:
            </p>

            <h4>Key Functions:</h4>
            <ol>
              <li>
                <strong>Moisture Protection:</strong> It helps shield wood from
                moisture, preventing warping, rotting, and other damage that can
                occur during storage or transport.
              </li>
              <li>
                <strong>UV Protection:</strong> Lumber wrap can protect wood
                from ultraviolet (UV) rays, which can degrade the material over
                time.
              </li>
              <li>
                <strong>Dust and Debris Shielding:</strong> It keeps dust, dirt,
                and debris away from the lumber, maintaining its cleanliness and
                quality.
              </li>
              <li>
                <strong>Transport Security:</strong> The wrap secures the lumber
                bundles, preventing movement and potential damage during
                shipping or handling.
              </li>
            </ol>

            <h4>Types of Lumber Wrap:</h4>
            <ul>
              <li>
                <strong>Shrink Wrap:</strong> Often used for palletized lumber,
                it tightly adheres to the wood, providing a secure barrier
                against moisture and contaminants.
              </li>
              <li>
                <strong>Stretch Film:</strong> This type can be used to bundle
                wood pieces together, offering a protective layer while allowing
                for some breathability.
              </li>
              <li>
                <strong>Plastic Sheeting:</strong> Sometimes used as a simpler
                form of protection, plastic sheeting can cover lumber piles.
              </li>
            </ul>

            <p>
              Overall, lumber wrap is an essential tool in the lumber industry
              for ensuring the quality and integrity of wood products during
              storage and transportation.
            </p>
          </div>

          <div className="col-lg-4 col-md-5 col-12">
            <img
              src="/assets/images/about/lumber.jpeg"
              alt="Lumber wrapped in polyethylene"
              className="rounded-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
