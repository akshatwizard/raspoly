import React from "react";

export default function CardDetail() {
  return (
    <section className="cardBoxContainer">
      <div className="container">
        <div className="row ">
          <div className="col-lg-4 col-md-6 col-sm-12 text-center my-2">
            <div className="cardbx">
              <lord-icon
                src="https://cdn.lordicon.com/trkmlure.json"
                trigger="hover"
                state="hover-rotate-up-to-down"
                colors="primary:#abd373,secondary:#abd373"
                style={{ width: "130px", height: "130px" }}
                //   style="width:250px;height:250px"
              ></lord-icon>
              <h4>WORLD CLASS INFRASTRUCTURE</h4>
              <p>
                We have world class facility of constructed area of over one
                million square feet and most modern machinery, it helps us
                deliver best and timely service to our customers at all times.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 text-center my-2">
            <div className="cardbx">
              <lord-icon
                src="https://cdn.lordicon.com/nzdmwlbv.json"
                trigger="hover"
                colors="primary:#abd373,secondary:#abd373"
                style={{ width: "130px", height: "130px" }}
              ></lord-icon>
              <h4>ALL UNDER ONE ROOF</h4>
              <p>
                We offer end-to-end processing facility which optimizes the
                performance and also strengthens the quality control. Except
                polymer resin, everything required to produce the bag is made
                within our facility.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 text-center my-2">
            <div className="cardbx">
              <lord-icon
                src="https://cdn.lordicon.com/wzrwaorf.json"
                trigger="hover"
                state="hover-conversation-alt"
                colors="primary:#abd373,secondary:#abd373"
                style={{ width: "130px", height: "130px" }}
              ></lord-icon>
              <h4>WE BELIEVE IN RELATIONSHIPS</h4>
              <p>
                We have always believed in people over business and this has
                ensured that we have a long-term relationship with our
                Customers, Employees and Stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
