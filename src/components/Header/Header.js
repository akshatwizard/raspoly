"use client";
import Link from "next/link";
import React from "react";

export default function Header() {
  function handleClick(event) {
    event.preventDefault();
    const mobileMenuWrapper = document.querySelector(".mobile-menu_wrapper");
    const mobileOverlay = document.querySelector(".global-overlay");
    const mobileMenu = document.querySelectorAll(".menu-open");

    if (mobileMenuWrapper && mobileMenuWrapper.classList.contains("open")) {
      mobileMenuWrapper.classList.remove("open");
    }
    if (mobileOverlay && mobileOverlay.classList.contains("overlay-open")) {
      mobileOverlay.classList.remove("overlay-open");
    }
    if (mobileMenu.length > 0) {
      mobileMenu.forEach((menu) => {
        menu.classList.remove("menu-open");
      });
    }
  }

  return (
    <header className="main-header-area">
      <div className="header-middle py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="header-middle-wrap position-relative">
                <Link href="/" className="header-logo">
                  <img
                    src="assets/images/logo/logo.png"
                    className="logoImage"
                    alt="Header Logo"
                  />
                  <p className="logoName">
                    RAS Polytex Pvt. Ltd.
                    <br />
                    <span className="line"></span>
                    <span>An ISO 9001, 14001, 22000 Company</span>
                    <br />
                    <span>SINCE 1983</span>
                  </p>
                </Link>

                <div className="header-right">
                  <ul>
                    <li></li>
                    <li>
                      <div className="main-menu position-relative">
                        <nav className="main-nav">
                          <ul className="upper-nav">
                            <li className="drop-holder d-none d-lg-block">
                              <Link href="/">Home</Link>
                            </li>
                            <li className="d-none d-lg-block drop-holder">
                              <Link href="">About Us</Link>
                              <ul className="drop-menu">
                                <li>
                                  <Link href="about-us">Who We Are</Link>
                                </li>
                                <li>
                                  <Link href="">What We Do</Link>
                                </li>
                                <li>
                                  <Link href="">Why Us</Link>
                                </li>
                                <li>
                                  <Link href="">Our Vision</Link>
                                </li>
                                <li>
                                  <Link href="">Our Mission</Link>
                                </li>
                                <li>
                                  <Link href="product-policy">
                                    Our Policies
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li>
                              <Link
                                href="sustanibility"
                                className="d-none d-lg-block"
                              >
                                Sustainability
                              </Link>
                            </li>
                            <li>
                              <Link href="csr" className="d-none d-lg-block">
                                CSR
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="certification"
                                className="d-none d-lg-block"
                              >
                                Certification
                              </Link>
                            </li>
                            <li className="d-none d-lg-block">
                              <Link href="contact">Contact Us</Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </li>
                    {/* <li className="d-none d-lg-block">
                      <Link href="#">
                        <lord-icon
                          src="https://cdn.lordicon.com/mdyiqybm.json"
                          trigger="morph"
                          stroke="bold"
                          state="morph-circle"
                          colors="primary:#abd373,secondary:#abd373"
                          style={{ width: "40px", height: "40px" }}
                        ></lord-icon>
                      </Link>
                    </li>
                    <li className="d-none d-lg-block">
                      <Link href="#">
                        <lord-icon
                          src="https://cdn.lordicon.com/iqagrlso.json"
                          trigger="hover"
                          stroke="bold"
                          state="hover-roll"
                          colors="primary:#abd373,secondary:#abd373"
                          style={{ width: "40px", height: "40px" }}
                        ></lord-icon>
                      </Link>
                    </li>
                    <li className="d-none d-lg-block">
                      <Link href="#">
                        <lord-icon
                          src="https://cdn.lordicon.com/gewhxiwb.json"
                          trigger="morph"
                          stroke="bold"
                          state="morph-logotype"
                          colors="primary:#abd373,secondary:#abd373"
                          style={{ width: "40px", height: "40px" }}
                        ></lord-icon>
                      </Link>
                    </li> */}
                    <li className="mobile-menu_wrap d-block d-lg-none">
                      <a
                        href="#mobileMenu"
                        className="mobile-menu_btn toolbar-btn pl-0"
                      >
                        <i className="pe-7s-menu"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="icon-i">
                    <li className="d-none d-lg-block">
                      <Link href="https://www.linkedin.com/company/ras-polytex-private-limited/posts/?feedView=all">
                        <lord-icon
                          src="https://cdn.lordicon.com/mdyiqybm.json"
                          trigger="morph"
                          stroke="bold"
                          state="morph-circle"
                          colors="primary:#ffffff,secondary:#ffffff"
                          style={{ width: "30px", height: "30px" }}
                        ></lord-icon>
                      </Link>
                    </li>
                    <li className="d-none d-lg-block">
                      <Link href="https://wa.me/+919236992823?text=">
                        <lord-icon
                          src="https://cdn.lordicon.com/cywksamr.json"
                          trigger="morph"
                          state="morph-circle"
                          style={{ width: "30px", height: "30px" }}
                          colors="primary:#ffffff,secondary:#ffffff"
                        ></lord-icon>
                      </Link>
                    </li>
                    <li className="d-none d-lg-block">
                      <Link href="https://www.youtube.com/channel/UCsupekTL8hixCx72qs2Ay7g">
                        <lord-icon
                          src="https://cdn.lordicon.com/gewhxiwb.json"
                          trigger="morph"
                          stroke="bold"
                          state="morph-logotype"
                          colors="primary:#ffffff,secondary:#ffffff"
                          style={{ width: "30px", height: "30px" }}
                        ></lord-icon>
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom d-none d-lg-block mb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-menu position-relative">
                <nav className="main-nav">
                  <ul>
                    <li className="megamenu-holder">
                      <Link href="/">Big Bags/FIBC</Link>
                      <ul className="drop-menu megamenu">
                        <li>
                          <ul>
                            <li>
                              <Link href="fibc">FIBC</Link>
                            </li>
                            <li>
                              <Link href="u-panel-bags">U Panel Bags</Link>
                            </li>
                            <li>
                              <Link href="four-panel-bags">
                                Four Panel Bags
                              </Link>
                            </li>
                            <li>
                              <Link href="circular-bags">
                                Circular/Tubular Bags
                              </Link>
                            </li>
                            <li>
                              <Link href="conical-bags">Conical Bags</Link>
                            </li>
                            <li>
                              <Link href="tunnel-bags">Tunnel Bags</Link>
                            </li>
                            <li>
                              <Link href="baffle-bags">Baffle Bags</Link>
                            </li>
                            <li>
                              <Link href="ventilated-bags">
                                Ventilated Bags
                              </Link>
                            </li>
                            <li>
                              <Link href="loop-bags">One/Two Loop Bags</Link>
                            </li>
                            <li>
                              <Link href="food-grade-bags">
                                Food Grade Bags
                              </Link>
                            </li>
                            <li>
                              <Link href="types-bags">
                                Types - B , C and D Bags
                              </Link>
                            </li>
                            <li>
                              <Link href="flexi-bags">Flexi Tanks</Link>
                            </li>
                            <li>
                              <Link href="un-bags">UN certified Bags</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="drop-holder">
                      <Link href="#">Small Bags/PPWB</Link>
                      <ul className="drop-menu">
                        {/* <li>
                          <Link href="webbings-handles">
                            Webbings &amp; Handles
                          </Link>
                        </li> */}
                        <li>
                          <Link href="ppws">PP Woven Bags</Link>
                        </li>
                        <li>
                          <Link href="adstar">Block Bottom bags</Link>
                        </li>
                        <li>
                          <Link href="leno">Leno bags</Link>
                        </li>

                        <li>
                          <Link href="bopp">BOPP Printed Bags</Link>
                        </li>

                        <li>
                          <Link href="pinch">Pinch Bottom Bags</Link>
                        </li>

                        <li>
                          <Link href="dunnage-bags">Dunnage Bags</Link>
                        </li>
                        <li>
                          <Link href="laminated-unlaminated">
                            Laminated Bags
                          </Link>
                        </li>
                        <li>
                          <Link href="shopping-bags">Shopping Bags</Link>
                        </li>

                        <li>
                          <Link href="cargo-bags">Cargo Bags</Link>
                        </li>
                        <li>
                          <Link href="garden-bags">Garden bags</Link>
                        </li>
                        <li>
                          <Link href="insect-bags">Insect Repellent Bags</Link>
                        </li>
                        <li>
                          <Link href="flame-bags">Flame Retardant Bags</Link>
                        </li>
                        <li>
                          <Link href="asbestos-bags">Asbestos Bags</Link>
                        </li>
                      </ul>
                    </li>

                    <li className="drop-holder">
                      <Link href="#">Technical Textiles</Link>
                      <ul className="drop-menu">
                        <li>
                          <Link href="geotextiles">Geotextiles</Link>
                        </li>
                        <li>
                          <Link href="pondlinear">Pond Liners</Link>
                        </li>
                        <li>
                          <Link href="roofunderlayment">Roof Underlayment</Link>
                        </li>
                        <li>
                          <Link href="lumber-wrap">Lumber Wrap</Link>
                        </li>
                        <li>
                          <Link href="tarpauline">Tarpaulins</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="drop-holder">
                      <Link href="#">
                        <span style={{ textTransform: "lowercase" }}>r</span>PP
                        Bags
                      </Link>
                      <ul className="drop-menu">
                        <li>
                          <Link href="recycle-bags">100% Recycled PP Bags</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#">PP Fabrics</Link>
                    </li>

                    <li>
                      <Link href="multifilament-yarn">MF Yarn</Link>
                    </li>

                    <li className="drop-holder">
                      <Link href="#">INK/Masterbatch</Link>
                      <ul className="drop-menu">
                        <li>
                          <Link href="ink-reducers">Ink and reducers</Link>
                        </li>
                        <li>
                          <Link href="masterbatch">Masterbatch</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#">
                        {" "}
                        {/* <img
                          src="assets/images/ioc.png"
                          alt=""
                          style={{ width: "48px" }}
                        /> */}
                        IOCL
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-sticky py-2 py-lg-0">
        <div className="container">
          <div className="header-nav position-relative">
            <div className="row align-items-center">
              <div className="col-lg-1 col-6">
                <Link href="/" className="header-logo">
                  <img
                    src="assets/images/logo/logo.png"
                    className="stickylogoImage"
                    alt="Header Logo"
                  />
                  <div className="company-name">
                    <p className="logoName">
                      RAS Polytex Pvt. Ltd.
                      <br />
                      <span className="line"></span>
                      <span>An ISO 9001, 14001, 22000 Company</span>
                      <br />
                      <span>SINCE 1983</span>
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-11 d-none d-lg-block">
                <div className="main-menu">
                  <nav className="main-nav">
                    <ul className="stick stickyUL" style={{ gap: "20px" }}>
                      <li className="megamenu-holder">
                        <Link href="/">Big Bags/FIBC</Link>
                        <ul className="drop-menu megamenu">
                          <li>
                            <ul>
                              <li>
                                <Link href="fibc">FIBC</Link>
                              </li>
                              <li>
                                <Link href="u-panel-bags">U Panel Bags</Link>
                              </li>
                              <li>
                                <Link href="four-panel-bags">
                                  Four Panel Bags
                                </Link>
                              </li>
                              <li>
                                <Link href="circular-bags">
                                  Circular/Tubular Bags
                                </Link>
                              </li>
                              <li>
                                <Link href="conical-bags">Conical Bags</Link>
                              </li>
                              <li>
                                <Link href="tunnel-bags">Tunnel Bags</Link>
                              </li>
                              <li>
                                <Link href="baffle-bags">Baffle Bags</Link>
                              </li>
                              <li>
                                <Link href="ventilated-bags">
                                  Ventilated Bags
                                </Link>
                              </li>
                              <li>
                                <Link href="loop-bags">One/Two Loop Bags</Link>
                              </li>
                              <li>
                                <Link href="food-grade-bags">
                                  Food Grade Bags
                                </Link>
                              </li>
                              <li>
                                <Link href="types-bags">
                                  Types - B , C and D Bags
                                </Link>
                              </li>
                              <li>
                                <Link href="flexi-bags">Flexi Tanks</Link>
                              </li>
                              <li>
                                <Link href="un-bags">UN certified Bags</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="drop-holder">
                        <Link href="#">Small Bags/PPWB</Link>
                        <ul className="drop-menu">
                          {/* <li>
                            <Link href="webbings-handles">
                              Webbings &amp; Handles
                            </Link>
                          </li> */}
                          <li>
                            <Link href="ppws">PP Woven Bags</Link>
                          </li>
                          <li>
                            <Link href="adstar">Block Bottom bags</Link>
                          </li>
                          <li>
                            <Link href="leno">Leno bags</Link>
                          </li>

                          <li>
                            <Link href="bopp">BOPP Printed Bags</Link>
                          </li>

                          <li>
                            <Link href="pinch">Pinch Bottom Bags</Link>
                          </li>

                          <li>
                            <Link href="dunnage-bags">Dunnage Bags</Link>
                          </li>
                          <li>
                            <Link href="laminated-unlaminated">
                              Laminated Bags
                            </Link>
                          </li>
                          <li>
                            <Link href="shopping-bags">Shopping Bags</Link>
                          </li>

                          <li>
                            <Link href="cargo-bags">Cargo Bags</Link>
                          </li>
                          <li>
                            <Link href="garden-bags">Garden bags</Link>
                          </li>
                          <li>
                            <Link href="insect-bags">
                              Insect Repellent Bags
                            </Link>
                          </li>
                          <li>
                            <Link href="flame-bags">Flame Retardant Bags</Link>
                          </li>
                          <li>
                            <Link href="asbestos-bags">Asbestos Bags</Link>
                          </li>
                        </ul>
                      </li>

                      <li className="drop-holder">
                        <Link href="">Technical Textiles</Link>
                        <ul className="drop-menu">
                          <li>
                            <Link href="geotextiles">Geotextiles</Link>
                          </li>
                          <li>
                            <Link href="pondlinear">Pond Liners</Link>
                          </li>
                          <li>
                            <Link href="roofunderlayment">
                              Roof Underlayment
                            </Link>
                          </li>
                          <li>
                            <Link href="lumber-wrap">Lamber Wrap</Link>
                          </li>
                          <li>
                            <Link href="tarpauline">Tarpaulins</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="drop-holder">
                        <Link href="#">
                          <span style={{ textTransform: "lowercase" }}>r</span>
                          PP Bags
                        </Link>
                        <ul className="drop-menu">
                          <li>
                            <Link href="recycle-bags">
                              100% Recycled PP Bags
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link href="#">PP Fabrics</Link>
                      </li>

                      <li>
                        <Link href="multifilament-yarn">MF Yarn</Link>
                      </li>

                      <li className="drop-holder">
                        <Link href="#">INK/Masterbatch</Link>
                        <ul className="drop-menu">
                          <li>
                            <Link href="ink-reducers">Ink and reducers</Link>
                          </li>
                          <li>
                            <Link href="masterbatch">Masterbatch</Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link href="#">
                          {" "}
                          {/* <img
                            src="assets/images/ioc.png"
                            alt=""
                            style={{ width: "48px" }}
                          /> */}
                          IOCL
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-lg-1 col-6">
                <div className="header-right">
                  <ul>
                    <li></li>
                    <li className="mobile-menu_wrap d-block d-lg-none">
                      <a
                        href="#mobileMenu"
                        className="mobile-menu_btn toolbar-btn pl-0"
                      >
                        <i className="pe-7s-menu"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu_wrapper" id="mobileMenu">
        <div className="offcanvas-body">
          <div className="inner-body">
            <div className="offcanvas-top">
              <a href="#" className="button-close">
                <i className="pe-7s-close"></i>
              </a>
            </div>
            <div className="header-contact offcanvas-contact">
              <Link
                href="/"
                className="header-logo"
                onClick={() => handleClick(event)}
              >
                <img
                  src="assets/images/logo/logo.png"
                  className="logoImage"
                  alt="Header Logo"
                />
              </Link>
            </div>
            <div className="offcanvas-menu_area">
              <nav className="offcanvas-navigation">
                <ul className="mobile-menu">
                  <li>
                    <Link href="/" onClick={() => handleClick(event)}>
                      <span className="mm-text">Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="about-us" onClick={() => handleClick(event)}>
                      <span className="mm-text">About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="contact" onClick={() => handleClick(event)}>
                      <span className="mm-text">Contact</span>
                    </Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="#">
                      <span className="mm-text">
                        Big Bags/FIBC
                        <i className="pe-7s-angle-down"></i>
                      </span>
                    </Link>
                    <ul className="sub-menu">
                      <li className="menu-item-has-children">
                        <Link href="fibc" onClick={() => handleClick(event)}>
                          <span className="mm-text">FIBC</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="u-panel-bags"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">U Panel Bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="four-panel-bags"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">Four Panel Bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="circular-bags"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">Circular/Tubular Bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="conical-bags"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">Conical Bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="tunnel-bags"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">Tunnel Bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="baffle-bags"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">Baffle Bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="ventilated-bags"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">Ventilated Bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="loop-bags"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">One/Two Loop Bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="food-grade-bags"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">Food Grade Bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="types-bags"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">
                            Types - B, C and D Bags
                          </span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="flexi-bags"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">Flexi Tanks</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="un-bags" onClick={() => handleClick(event)}>
                          <span className="mm-text">UN Certified Bags</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="#">
                      <span className="mm-text">
                        Small Bags/PPW Bags
                        <i className="pe-7s-angle-down"></i>
                      </span>
                    </Link>
                    <ul className="sub-menu">
                      {/* <li className="menu-item-has-children">
                        <Link href="webbings-handles">
                          <span className="mm-text">Webbings & Handles</span>
                        </Link>
                      </li> */}
                      <li className="menu-item-has-children">
                        <Link href="ppws" onClick={() => handleClick(event)}>
                          <span className="mm-text">PP Woven Bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="adstar" onClick={() => handleClick(event)}>
                          <span className="mm-text">Block Bottom Bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="leno" onClick={() => handleClick(event)}>
                          <span className="mm-text">Leno Bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="bopp" onClick={() => handleClick(event)}>
                          <span className="mm-text">BOPP Printed Bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="pinch" onClick={() => handleClick(event)}>
                          <span className="mm-text">Pinch Bottom Bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="dunnage-bags"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">Dunnage Bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="laminated-unlaminated"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">Laminated Bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="shopping-bags"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">Shopping Bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="cargo-bags"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">Cargo Bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="garden-bags"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">Garden Bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="insect-bags"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">Insect Repellent Bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="flame-bags"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">Flame Retardant Bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="asbestos-bags"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">Asbestos Bags</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="#">
                      <span className="mm-text">
                        Technical Textiles
                        <i className="pe-7s-angle-down"></i>
                      </span>
                    </Link>
                    <ul className="sub-menu">
                      <li className="menu-item-has-children">
                        <Link
                          href="geotextiles"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">Geotextiles</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="pondlinear"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">Pond Liners</span>
                        </Link>
                      </li>

                      <li className="menu-item-has-children">
                        <Link
                          href="roof-underlayment"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">Roof Underlayment</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="lumber-wrap"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">Lumber Wrap</span>
                        </Link>
                      </li>

                      <li className="menu-item-has-children">
                        <Link
                          href="tarpauline"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">Tarpaulins</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item-has-children">
                    <Link href="#">
                      <span className="mm-text">
                        Recycled PP Bags
                        <i className="pe-7s-angle-down"></i>
                      </span>
                    </Link>
                    <ul className="sub-menu">
                      <li className="menu-item-has-children">
                        <Link
                          href="recycle-bags"
                          onClick={() => handleClick(event)}
                        >
                          <span
                            className="mm-text"
                            style={{ justifyContent: "start" }}
                          >
                            <span style={{ textTransform: "lowercase" }}>
                              r
                            </span>
                            PP Bags
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#" onClick={() => handleClick(event)}>
                      <span className="mm-text">PP Fabrics</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="multifilament-yarn"
                      onClick={() => handleClick(event)}
                    >
                      <span className="mm-text">MF Yarn</span>
                    </Link>
                  </li>

                  <li className="menu-item-has-children">
                    <Link href="#">
                      <span className="mm-text">
                        INK/Masterbatch
                        <i className="pe-7s-angle-down"></i>
                      </span>
                    </Link>
                    <ul className="sub-menu">
                      <li className="menu-item-has-children">
                        <Link
                          href="ink-reducers"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">Ink and reducers</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="masterbatch"
                          onClick={() => handleClick(event)}
                        >
                          <span className="mm-text">Masterbatch</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link href="#" onClick={() => handleClick(event)}>
                      IOCL
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="sustanibility"
                      onClick={() => handleClick(event)}
                    >
                      <span className="mm-text">Sustainability</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="certification"
                      onClick={() => handleClick(event)}
                    >
                      Certification
                    </Link>
                  </li>
                  <li>
                    <Link href="csr" onClick={() => handleClick(event)}>
                      CSR
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content modal-bg-dark">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                data-tippy="Close"
                data-tippy-inertia="true"
                data-tippy-animation="shift-away"
                data-tippy-delay="50"
                data-tippy-arrow="true"
                data-tippy-theme="sharpborder"
              ></button>
            </div>
            <div className="modal-body">
              <div className="modal-search">
                <span className="searchbox-info">
                  Start typing and press Enter to search or ESC to close
                </span>
                <form action="#" className="hm-searchbox">
                  <input
                    type="text"
                    name="Search..."
                    value="Search..."
                    onblur="if(this.value==''){this.value='Search...'}"
                    onfocus="if(this.value=='Search...'){this.value=''}"
                    autocomplete="off"
                  />
                  <button
                    className="search-btn"
                    type="submit"
                    aria-label="searchbtn"
                  >
                    <i className="pe-7s-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="global-overlay"></div>
    </header>
  );
}
