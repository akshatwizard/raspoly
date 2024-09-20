import React from "react";

export default function Industry() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="row row-gap-4">
        <div className="section-title-wrap without-tab">
            <h2 className="section-title mb-3">Industries We are Into</h2>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="indImg">
              <img
                src="https://www.raspoly.com/image/Agriculture-home.jpg"
                alt=""
              />
              <h4>Agriculture</h4>
              <p>
                Agricultural packaging – Polypropylene Woven bags are widely
                used for the storage and transportation of agricultural products
                such as feeds, fruits, vegetables, aquatic products, etc.Food
                packaging – These bags are also increasingly used to pack maize,
                rice, flour, and other food products.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="indImg">
              <img
                src="https://www.raspoly.com/image/Construction-home.jpg"
                alt=""
              />
              <h4>Construction and Mining</h4>
              <p>
                Woven sack industry offers diversified products in the
                construction industry. From the flexible containers used for
                carrying from bulk material to the small cement bags.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="indImg">
              <img
                src="https://www.raspoly.com/image/Packaging-home.jpg"
                alt=""
              />
              <h4>Packaging</h4>
              <p>Packaging and its accessories- From anything to everything.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="indImg">
              <img src="https://www.raspoly.com/image/manufacture.png" alt="" />
              <h4>Manufacturing</h4>
              <p>Cement industries, Fertilizers, Petrochemicals.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="indImg">
              <img src="	https://www.raspoly.com/image/logistics.png" alt="" />
              <h4>Logistics</h4>
              <p>For safe and protected transportation of goods.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="indImg">
              <img src="https://www.raspoly.com/image/pet.png" alt="" />
              <h4>PET Foods</h4>
              <p>Providing protection from oxygen, moisture, and pests.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
