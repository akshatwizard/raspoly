import React from "react";

export default function page() {
  return (
    <>
      <section className="sectionContainer">
        <div className="container">
          <div className="section-title-wrap without-tab mb-5">
            <h2 className="section-title mb-3">We at raspoly</h2>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <p>
                Shri Ramesh Chaudhary, our founder, began the journey of the RAS
                Group in 1983 with a single stitching machine for making jute
                bags. Over time, we grew organically, constantly adapting to
                changes. In 1994, recognizing the rise of polypropylene, we
                expanded into this segment with one 100Kg/hr Tape Line and 10
                looms, driven by the vision of becoming a trusted provider of
                diverse flexible packaging solutions.
              </p>
              <p>
                Each year, we invested in the latest technologies, broadened our
                product portfolio, and expanded our production capacities to
                stay competitive and remain a company with youthful energy and
                rich experience. We diversified our locations and integrated
                backward processes, helping us control costs and improve
                management. These efforts have shaped the successful company we
                are today, and our journey continues as we embrace necessary
                changes to better serve the global market.
              </p>
              <p>
                As an environmentally conscious organization, we believe in
                giving back to society. All our economic decisions are guided by
                this principle. We are committed to sustainability and the
                circular economy, investing in recycling initiatives long before
                countries introduced regulations for recycled products. Today,
                we are certified to manufacture products using up to 100%
                recycled materials, achieved through state-of-the-art recycling
                equipment and in-house research. Our trademark 'Replast'
                distinguishes our recycled products, and we are currently
                applying for patents on several innovations. All our products
                are manufactured using green electricity generated from our
                solar plants.
              </p>

              {/* <p>
                In 2014, on the birth anniversary of Mahatma Gandhi, we launched
                'Little Leaf,' an initiative aimed at promoting recycling and
                supporting education. This not-for-profit endeavor reinvests all
                proceeds into its mission. We truly believe that the purpose of
                business is to make society a better place to live.
              </p> */}

              <p>
                Our customers are our driving force, echoing Mahatma Gandhi’s
                words:{" "}
                <strong>
                  {" "}
                  "A customer is the most important visitor on our premises. He
                  is not dependent on us, we are dependent on him. He is not an
                  interruption in our work, he is the purpose of it. He is not
                  an outsider in our business, he is part of it. We are not
                  doing him a favor by serving him, he is doing us a favor by
                  giving us the opportunity to do so."
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionContainer bg-light">
        <div className="container">
          <div className="row row-gap-5 ">
            <div className="col-lg-3 col-md-3"></div>
            
            <div className="col-lg-6 col-md-6 col-12">
              <img
                src="/assets/images/about/5.jpg"
                alt=""
                className="rounded"
              />
            </div>
            <div className="col-lg-3 col-md-3"></div>
          </div>
        </div>
      </section>
    </>
  );
}
