import React from "react";

export default function page() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="section-title-wrap without-tab">
          <h2 className="section-title mb-3">Leno Bags</h2>
        </div>
        <div className="row bg-light p-4 rounded-4">
          <div className="col-lg-8 col-md-6 col-12">
            {/* <h1>Leno Bags</h1> */}
            <p>
              Leno is a weaving technique where adjacent warp tapes twist around
              weft tapes, locking each weft securely in place. Made from
              polypropylene, leno bags are flexible, durable, moistureresistant,
              and capable of handling heavy loads. They provide excellent
              ventilation, visibility, and easy transport, making them ideal for
              agricultural storage without harming the contents. The bags
              feature reinforced stitching with top hemming and drawstrings.
            </p>
            <h6>PP Leno Bags: Features</h6>
            <ol type="a">
              <li>Safe, hygienic packaging for perishable goods.</li>
              <li>Excellent breathability prevents odors and fungal growth.</li>
              <li>Prevents sweating and rotting of produce.</li>
              <li>Non-toxic and energy-efficient for cold storage.</li>
            </ol>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <img src="/assets/images/small/leno.jpeg" alt="" />
          </div>
          <div className="col-lg-8 col-md-6 col-12">
            <h4>PP Leno Bags: Applications</h4>
            <p>
              Primarily, PP Leno bags are ideal for packing, storing, and
              transporting a variety of products, including
            </p>
            <ol type="a">
              <li>
                Firewood, fruits, vegetables, animal feed, groundnuts, flowers,
                shellfish, and other non-durable products.
              </li>
            </ol>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <img
              className="mt-5"
              src="/assets/images/small/leno2.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
