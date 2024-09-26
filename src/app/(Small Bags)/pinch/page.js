import React from "react";

export default function page() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="section-title-wrap without-tab">
          <h2 className="section-title mb-3">Pinch Bottom Bags</h2>
        </div>
        <div className="row bg-light p-4 rounded-4">
          <div className="col-lg-12">
            {/* <h1>Pinch Bottom Bags</h1> */}
            <p>
              <img
                src="/assets/images/small/pinch.jpeg"
                alt=""
                style={{ width: "400px", float: "right" }}
              />
              Pinch bottom bags are specifically designed for dry bulk goods
              such as pet food, feed, seed, and fertilizer. Known for their
              superior strength-to-weight ratio and attractive appearance, they
              are the ideal choice for products that require both durability and
              premium brand presentation
              <br />
              <br />
              Constructed from high-strength woven polypropylene tape combined
              with printed Biaxially Oriented Polypropylene (BOPP), these bags
              offer lightweight yet robust packaging with excellent tear and
              puncture resistance, along with a high-quality visual appeal.
            </p>
            <h4>Features :</h4>
            <ol>
              <li>
                High-resolution 8-color printing for exceptional product
                presentation and brand visibility.
              </li>
              <li>
                Woven polypropylene with BOPP film for enhanced strength and
                reduced material usage.
              </li>
              <li>
                Strong pinch bottom design for better handling and minimized
                breakage risk.
              </li>
              <li>Easy-open feature.</li>
              <li>Compatible with automatic filling systems.</li>
              <li>100% recyclable.</li>
            </ol>
            <h4>Usage :</h4>
            <p>
              BOPP film and high-resolution 8-color printing on the entire bag,
              including the bottom, ensure that brands remain visible even when
              stacked on pallets. The reverse printing on the BOPP film protects
              against scratches and abrasions, maintaining a long-lasting,
              vibrant appearance. The pinch bottom design prevents leaks and
              moisture intrusion, offering a better seal than sewn seams. The
              BOPP film also acts as a moisture barrier, eliminating the need
              for an inner polyethylene liner. These bags are primarily used to
              prevent product duplication and enhance strong brand identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
