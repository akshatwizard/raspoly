import React from "react";

export default function WhatWeDO() {
  return (
    <section className="sectionContainer">
      <div className="container infoContainer">
        <div className="row">
          <div className="section-title-wrap without-tab">
            <h2 className="section-title mb-3">Industries We Serve</h2>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center mt-5">
            <div className="infoCardBox">
              <img src="assets/images/banner/agri.jpg" alt="" />
            </div>
            <h4 className="my-3">Agriculture</h4>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5 text-center">
            <div className="infoCardBox">
            <img src="assets/images/banner/manufacturing.jpeg" alt="" />
            </div>
            <h4 className="my-3">Manufacturing</h4>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5 text-center">
            <div className="infoCardBox">
            <img src="assets/images/banner/pack.jpg" alt="" />
            </div>
            <h4 className="my-3">Packaging</h4>
          </div>
          
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5 text-center">
            <div className="infoCardBox">
            <img src="assets/images/banner/logistics.jpeg" alt="" />
            </div>
            <h4 className="my-3">Logistics</h4>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5 text-center">
            <div className="infoCardBox">
            <img src="assets/images/banner/pet.jpeg" alt="" />
            </div>
            <h4 className="my-3">PET Food</h4>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5 text-center">
            <div className="infoCardBox">
            <img src="assets/images/banner/construction.jpg" alt="" />
            </div>
            <h4 className="my-3">Construction and Mining</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
