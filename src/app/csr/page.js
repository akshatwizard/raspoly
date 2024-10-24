import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="section-title-wrap without-tab mb-5">
          <h2 className="section-title mb-3">
            Corporate Social Responsibility
          </h2>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12 text-center">
                <p className="fw-bolder">
                  "The best way to predict the future is to create it — through
                  responsible business practices."
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <p>
                  A To co-exist in the society, it is our moral responsibility
                  to give back to the society. At RAS we firmly believe that our
                  presence and existence is because of the society around us and
                  therefore its our duty to give back to the society.
                </p>
                <p>
                  It is profoundly said, that “don’t let your right hand know
                  what your left hand is doing”, meaning all good work should be
                  secretly done. All the giving should be done discreetly. But
                  we belong to a modern world and here our intentions must not
                  only be reflected in actions whereas they must be recorded and
                  well communicated.
                </p>
                <p className="fw-bolder">
                  In light of the above, please find below a glimpse of our CSR
                  activities. We feel grateful enough that God has chosen us to
                  be a medium for making an effort to make a difference in the
                  society.
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <img
                  src="/assets/images/about/csr.jpg"
                  alt=""
                  className="rounded-4 mb-4"
                />
              </div>
            </div>
            <div className="row row-gap-3 mt-4">
            <div className="col-lg-6 col-md-6 col-12">
                <img
                  src="/assets/images/about/oxygen.jpg"
                  alt=""
                  className="rounded-4"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <p>
                  <strong>Oxygen Plant</strong> – During the first wave of
                  Corona Virus pandemic, the severe oxygen crisis led to the
                  dire need of it. A small contribution of an Oxygen Plant at a
                  district hospital in Varanasi definitely proved to be life
                  saving.
                </p>
                {/* <ol>
                  <li>
                    <strong>Oxygen Plant</strong> – During the first wave of
                    Corona Virus pandemic, the severe oxygen crisis led to the
                    dire need of it. A small contribution of an Oxygen Plant at
                    a district hospital in Varanasi definitely proved to be life
                    saving.
                  </li>
                </ol> */}
              </div>
              
              {/* <div className="col-12 d-flex align-items-center justify-content-center mt-5">
                <Link href='/assets/CSR-POLICY-RAS.pdf' download={true} target="_blank"><button className="csr">Download CSR policy</button></Link>
              </div> */}
            </div>

            <div className="row row-gap-3 mt-5 bg-light p-4 rounded-4">
              <div className="col-lg-12 col-md-7 col-12">
                <h4 className="text-center">
                  Ekal Shiksha Abhiyan- empowerment through education
                </h4>
                <img src="assets/images/ekal.jpeg" alt="" style={{margin:"20px 0", display:"inline-block",borderRadius:"7px"}} />
                <p>
                  RAS Group's Contribution to Ekal Shiksha Abhiyan The RAS
                  Group’s involvement with the Ekal Shiksha Abhiyan is an
                  extension of its broader corporate social responsibility (CSR)
                  initiatives. From building libraries to fostering green
                  energy, the company has consistently shown a dedication to
                  initiatives that promote sustainable growth and societal
                  well-being. Their partnership with Ekal Shiksha Abhiyan is yet
                  another step in their journey towards creating a more
                  inclusive and empowered India, ensuring that education reaches
                  even the most underserved areas.
                </p>

                <p>
                  RAS Group, deeply committed to sustainability and societal
                  betterment, actively participates in the{" "}
                  <strong>Ekal Shiksha Abhiyan</strong>, an initiative
                  transforming education in rural and tribal India. This
                  partnership reflects the company’s core values of{" "}
                  <strong>inclusivity, community development</strong>, and{" "}
                  <strong>empowerment through education.</strong>
                </p>
                <p>
                  Ekal Shiksha Abhiyan focuses on providing{" "}
                  <strong>one-teacher schools (Ekal Vidyalayas)</strong> in
                  remote areas, addressing the educational gap in underserved
                  regions. RAS Group’s contributions—both{" "}
                  <strong>financial and in-kind—ensure</strong> that children in
                  these areas receive quality education, fostering{" "}
                  <strong>self-reliance</strong> and creating{" "}
                  <strong>better livelihood opportunities</strong>.
                </p>
                <p>
                By supporting Ekal Shiksha Abhiyan, RAS Group reinforces its commitment to <strong>social responsibility</strong>, leveraging its resources for the <strong></strong>.
                </p>
              </div>
            </div>

            <div className="row row-gap-3 mt-5 bg-light p-4 rounded-4">
              <div className="col-lg-8 col-md-7 col-12">
                <h4>Community Service and Recycling</h4>
                <p>
                  At Little Leaf, we are deeply committed to giving back to
                  society. That's why all proceeds and donations we receive go
                  toward providing education for underprivileged children and
                  supporting tree planting initiatives, helping to create a
                  greener and healthier planet.
                </p>
                <p>
                  Little Leaf is committed to its responsibility to protect our
                  planet and ensure sustainability. The organization firmly
                  upholds the principles of the 3 R's: REDUCE, REUSE, and
                  RECYCLE.
                </p>
                <p>
                  Little Leaf works to ensure that waste is sorted at the
                  source, enabling recycling to be conducted in the most
                  efficient and scientific way.
                </p>
              </div>
              <div className="col-lg-4 col-md-5 col-12">
                <img
                  src="/assets/images/little.png"
                  alt=""
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
            </div>
            <div className="row row-gap-3 mt-5 bg-light p-4 rounded-4">
              <div className="col-12">
                <img
                  src="/assets/images/about/student.png"
                  alt=""
                  className="rounded-3"
                />
              </div>
              <div className="col-lg-12 col-md-7 col-12">
                <h3>Empowering the education of underprivileged children</h3>

                <strong>
                  "Empower a child through education, and you empower the
                  world."
                </strong>
                <p>
                  Little Leaf is committed to supporting education for
                  underprivileged communities by regularly donating study
                  materials, writing supplies, and other necessary resources.
                  Our mission also focuses on offering a variety of reusable
                  products designed to protect trees. As the lungs of our
                  planet, trees play a crucial role in ensuring a sustainable
                  future, and their preservation is at the heart of our efforts.
                </p>
              </div>
            </div>
            <div className="row row-gap-3 mt-5 bg-light p-4 rounded-4">
              <div className="col-lg-8 col-md-7 col-12">
                <h3>Tree Planting Initiative Led by Little Leaf Volunteers</h3>

                <strong>
                  "He who plants a tree, plants a hope." – Lucy Larcom
                </strong>
                <p>
                  To raise awareness about the importance of preserving the
                  environment and ecology, Little Leaf organized a tree
                  plantation drive. As the first event hosted by Little Leaf,
                  its primary goal was to educate students on how we can combat
                  pollution and protect our climate. During the event, over 100
                  trees were planted.
                </p>
              </div>
              <div className="col-lg-4 col-md-5 col-12">
                <img
                  src="/assets/images/about/csr-img.jpeg"
                  alt=""
                  className="rounded-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
