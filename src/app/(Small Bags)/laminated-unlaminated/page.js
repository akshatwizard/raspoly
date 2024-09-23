import React from "react";

export default function page() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="section-title-wrap without-tab mb-5">
          <h2 className="section-title mb-3">Laminated Bags</h2>
        </div>
        <div className="row bg-light p-4 rounded-4 row-gap-4">
          <div className="col-lg-8 col-md-7 col-12">
            <p>
              <strong>Laminated bags</strong> are a popular choice for packaging due to their durability, visual appeal, and versatility. The production process begins with a <strong>base layer</strong> made from a white substrate, typically made of materials like paper or a low-cost plastic. This base provides a solid foundation for the bag and allows for high-quality printing.
            </p>

            <p>
              Next, a <strong>thin layer of polypropylene sheeting</strong> is printed using four-color graphics. This printing process often involves advanced techniques such as flexographic or digital printing, which ensures vibrant colors and detailed designs. The printed polypropylene layer is then laminated onto the substrate. This lamination process not only enhances the bag's aesthetic appeal but also adds a protective layer, making it resistant to moisture, dirt, and other environmental factors.
            </p>

            <p>
              To ensure that the laminated layer remains securely attached to the substrate, the top layer is <strong>heat-bonded</strong>, creating a strong, permanent seal. This heat sealing process is crucial for maintaining the bag's integrity, especially when it contains food products or other sensitive materials.
            </p>
          </div>
          <div className="col-lg-4 col-md-5 col-12">
            <img
              src="/assets/images/small/laminated.jpg"
              alt="Laminated Bag"
              className="rounded-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
