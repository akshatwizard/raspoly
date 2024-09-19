import React from "react";

export default function Exprience() {
  return (
    <section className=" mt-5 py-5 expContainer">
      <div className="container">
        <div className="row row-gap-4">
          <div className="col-lg-3 col-md-6 col-12 col-xs-12 text-center contentBox my-2">
            <h1 className="year">40+</h1>
            <p>Years of Experience</p>
          </div>
          <div className="col-lg-3 col-md-6 col-12 col-xs-12 text-center contentBox my-2">
            <h1 className="year">40K+</h1>
            <p> Metric Tons of Annual Capacity</p>
          </div>
          <div className="col-lg-3 col-md-6 col-12 col-xs-12 text-center contentBox my-2">
            <h1>4MW</h1>
            <p>Of Captive Solar Energy Production</p>
          </div>
          {/* <div className="col-lg-4 col-md-6 col-12 col-xs-12 text-center contentBox my-2">
            <h1> 5 </h1>
            <p>Presence in continents </p>
          </div> */}
          <div className="col-lg-3 col-md-6 col-12 col-xs-12 text-center contentBox my-2">
            <h1> 4 </h1>
            <p>Manufacturing Locations in India </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
