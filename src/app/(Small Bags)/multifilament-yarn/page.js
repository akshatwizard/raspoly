import React from "react";

export default function page() {
  return (
    <section className="sectionContainer">
      <div className="container">
      <div className="section-title-wrap without-tab mb-5">
          <h2 className="section-title mb-3">Multifilament Yarn's</h2>
        </div>
        <div className="row">
          <div className="col-12">
            <h1>MULTIFILAMENT YARNS</h1>
            <p>
              <img
                src="assets/images/banner/thread.jpeg"
                alt=""
                style={{ width: "400px", float: "right", borderRadius: "15px" }}
                className="mb-3"
              />
              Polypropylene Multifilament Yarns of high and medium tenacity.
              They come in three different types (Intermingled, Twisted,
              Cabled), with a wide denier range varying from 300 to 5000.
            </p>
            <h3>Uses & Functions</h3>
            <p>
              PP Yarns are the ideal starting material for weaving, braiding,
              twisting and sewing.
            </p>
            <h4>Features & Benefits</h4>
            <p>
              The wide range of our PP Yarns includes natural, black, blue and a
              variety of colours, upon request. They all offer excellent
              technical parameters, with high tenacity, chemical resistance and
              flexibility. Precision winding is available for coarse yarns. High
              quality twisting ensures a smooth performance during sewing.
            </p>
            <h4>Applications</h4>
            <p>
              Sewing, slings, industrial, braid ropes, webbing, nets, belts,
              filtration.
            </p>
            <h4>Seam Variants</h4>
            <p>
              Single Chain , Heracles ( Overlock ), Double Chain Stitch ,
              Heracles ( Overlock ) + Chain Stitch ( Safety Stitch ) There are
              several options of seams. During the production it is determined
              which seams are used, depending on the capacity of the big bag.
            </p>
            <br />
            <br />

            <h4>AIM YARN</h4>
            <p>
              <img className="aimsImg" src="assets/images/product/aim.jpeg" />
              Air Intermingled Yarns are produced through a process where air
              pressure creates nips at regular intervals, causing the flat yarn
              filaments to become entangled. This results in the yarns being
              intermingled along their length with evenly spaced nips. These
              yarns are ideal for use in high-speed fabric conversion machines,
              including those for narrow and wide fabrics, belts, and cords. The
              yarns are precision-wound with a stepped approach, ensuring smooth
              operation in high-speed processes such as stitching, weaving, and
              braiding.
            </p>
            <br />
            <br />
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-10" style={{paddingLeft:"4.2rem"}}>
                <h4>TWISTED YARN </h4>
              </div>
            </div>
            <p>
              <img
                className="aimsImg"
                src="assets/images/product/twisted.jpeg"
                style={{ float: "left" }}
              />
              Twisted yarns are produced by twisting flat yarns according to
              specific application requirements. These yarns are commonly used
              in fabrics, webbings, sack stitching, FIBCs (Flexible Intermediate
              Bulk Containers), flexible luggage, tarpaulins, and other similar
              products.
            </p>
            <br />
            <br />
            <br />
            <h4>FLAT YARN</h4>
            <p>
              <img className="aimsImg" src="assets/images/product/flat.jpeg" />
              Flat yarns are simple, fully drawn yarns without any additional
              processing. They are commonly used in applications such as weft
              yarns in narrow webbings, various types of ropes, specialized
              woven fabrics, and webbings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
