import React from "react";

export default function page() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="row">
          <div className="section-title-wrap without-tab">
            <h2 className="section-title mb-3">Tunnel Bags</h2>
          </div>

          <div
            className="col-lg-8  justify-content-center"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h5>Tunnel Lift Bags</h5>
            <p>
              Tunnel Lift Builders Bags have been specially designed for use
              with fork lift trucks. The two continuous tunnels run along the
              sides of the bag allowing for easy loading onto truck forks.
            </p>
          </div>
          <div className="col-lg-4 col-md-5 col-12 mt-5 d-flex align-items-center justify-content-center">
            <div className="image-content d-flex align-items-center justify-content-center">
              <img
                src="https://www.raspoly.com/image/fibc/tunnel.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
