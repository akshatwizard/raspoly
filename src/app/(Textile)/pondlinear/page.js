import React from "react";

export default function pondlinear() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="section-title-wrap without-tab mb-4">
          <h2 className="section-title mb-3">Pond Liners</h2>
        </div>
        <div className="row bg-light p-4 rounded-4">
          <div className="col-lg-12">
            {/* <h1>What is HDPE Pond Liner?</h1> */}
            <p>
              <img
                src="/assets/images/small/pondliners.jpeg"
                alt=""
                style={{ width: "400px", float: "right" }}
                className="rounded-2"
              />
              HDPE Pond Liner is a durable pond liner made from high-density
              polyethylene, ideal for applications involving ponds up to 30 feet
              in diameter. It is lightweight, resistant to punctures, tears, and
              snags, and easy to transport.
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>
                Key Considerations for Optimal Performance:
              </span>
              <br />
              <br />
            </p>
            <ol>
              <li>
                <span style={{ fontWeight: "600" }}>Level Foundation:</span>{" "}
                Ensure the pond base is even to allow for proper alignment of
                the liner, preventing shifts during installation.
              </li>
              <li>
                <span style={{ fontWeight: "600" }}>Solid Substrate: </span> Use
                a firm foundation covered with at least 3 inches of soil or
                gravel to provide stability and prevent sagging.
              </li>
              <li>
                <span style={{ fontWeight: "600" }}>
                  Adequate Water Level:{" "}
                </span>{" "}
                Fill the pond to within 2 inches of the liner's top edge to
                maintain a taut surface and prevent movement.
              </li>
              <li>
                <span style={{ fontWeight: "600" }}>Proper Drainage: </span> :
                Drill evenly spaced holes around the pond perimeter for
                effective water drainage, but avoid over-drilling to prevent
                seepage.
              </li>
              <li>
                <span style={{ fontWeight: "600" }}>Effective Sealing: </span>{" "}
                Seal all seams with an appropriate sealant to maintain
                watertight integrity.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
