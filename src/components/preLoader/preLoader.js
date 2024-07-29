import React from "react";

export default function PreLoader() {
  return (
    <div className="preloader-activate preloader-active open_tm_preloader">
      <div className="preloader-area-wrap">
        <div className="spinner d-flex justify-content-center align-items-center h-100">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
    </div>
  );
}
