import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12 text-center">
                <h1>Corporate Social Responsibility</h1>
              </div>
              <div className="col-lg-8">
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
                <p>
                  In light of the above, please find below a glimpse of our CSR
                  activities. We feel grateful enough that God has chosen us to
                  be a medium for making an effort to make a difference in the
                  society.
                </p>
                <ol>
                  <li>
                    <strong>Oxygen Plant</strong> – During the first wave of
                    Corona Virus pandemic, the severe oxygen crisis led to the
                    dire need of it. A small contribution of an Oxygen Plant at
                    a district hospital in Varanasi definitely proved to be life
                    saving.
                  </li>
                  <li>
                    Better than feeding someone for a day, it’s better to
                    educate them to create a livelihood. Contributing towards
                    education of girls and under privileged.
                  </li>
                  <li>
                    Religion gives hope and purpose to live and hence constant
                    donations towards various religious activities, temples and
                    allied interests.
                  </li>
                </ol>
              </div>
              <div className="col-lg-4">
                <img
                  src="https://www.raspoly.com//image/csr-raspoly.jpg"
                  alt=""
                />
                <img
                  src="https://www.raspoly.com//image/csr-raspoly-solutions.jpg"
                  alt=""
                  className="mt-4"
                />
              </div>
              <div className="col-12 d-flex align-items-center justify-content-center mt-5">
                <Link href='/assets/CSR-POLICY-RAS.pdf' download={true} target="_blank"><button className="csr">Download CSR policy</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
