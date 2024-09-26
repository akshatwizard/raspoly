import React from "react";

export default function page() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="section-title-wrap without-tab mb-5">
          <h2 className="section-title mb-3">Contact US</h2>
        </div>
        <div className="row row-gap-4">
          <div className="col-lg-7 col-md-6 col-12">
            <section className="contact-us">
              <div className="contact-wrapper position-relative overflow-hidden">
                <div className="row">
                  <div className="col-lg-8">
                    <form action="">
                      <label className="mt-3" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Name"
                        id="name"
                      />

                      <label className="mt-3" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        id="email"
                      />

                      <label className="mt-3" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        id="message"
                      ></textarea>

                      <input
                        className="form-control mt-3 bg-dark text-white"
                        type="submit"
                        value="Send Message"
                      />
                    </form>
                  </div>
                  <img
                    className="contact-bg d-none d-lg-block"
                    src="https://codewithshabbir.github.io/Positivus/assets/images/contact-bg.png"
                    alt="Contact Background"
                  />
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-5 col-md-6 col-12">
            <h1>RAS Polytex PVT LTD</h1>
            <p className="mt-4">
              <span style={{ fontWeight: "700" }}>Office:</span> B-Block, 8th
              Floor, Vinayak Plaza Maldahiya Crossing, Varanasi – 221002 UP,
              INDIA
            </p>
            <p style={{ margin: "0" }}>
              <span style={{ fontWeight: "700" }}>Email:-</span> sales@raspoly.com
            </p>
            <p style={{ margin: "0" }}>
              <span style={{ fontWeight: "700" }}>Phone/Whatsapp:-</span> +91
              92369 92823
            </p>
            <p style={{ margin: "0" }}>
              <span style={{ fontWeight: "700" }}>Tel:-</span> 0542-2205200
            </p>
            <p style={{ margin: "0" }}>
              <span style={{ fontWeight: "700" }}>Works:-</span> D-4, Industrial
              Area, Ramnagar Chanduali – 221110, UP, INDIA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
