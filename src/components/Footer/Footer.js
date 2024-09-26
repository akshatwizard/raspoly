import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section className="" style={{ backgroundColor: "#D8E9D6" }}>
      <div class="footer-area">
        <div class="footerContainerBx">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 pt-40">
                <div class="footer-widget-item">
                  <h3 class="footer-widget-title">Products</h3>
                  <ul class="footer-widget-list-item">
                    <li>
                      <Link href="fibc">FIBC</Link>
                    </li>
                    <li>
                      <Link href="ppws">PP Woven Bags</Link>
                    </li>
                    <li>
                      <Link href="">PP Fabric</Link>
                    </li>
                    <li>
                      <Link href="ink-reducers">Ink and Reducers</Link>
                    </li>
                    <li>
                      <Link href="recycle-bags">100% Recycled PP Bags</Link>
                    </li>
                    <li>
                      <Link href="multifilament-yarn">Multi Filament Yarn</Link>
                    </li>
                    <li>
                      <Link href="masterbatch">Masterbatches</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 pt-40">
                <div class="footer-widget-item">
                  <h3 class="footer-widget-title">Useful Links</h3>
                  <ul class="footer-widget-list-item">
                    <li>
                      <Link href="https://www.littleleaf.one/">
                        Little Leaf
                      </Link>
                    </li>
                    <li>
                      <Link href="certification">
                        Certificate and Achivements
                      </Link>
                    </li>
                    <li>
                      <Link href="about-us">Team</Link>
                    </li>
                    <li>
                      <Link href="csr">CSR</Link>
                    </li>
                    <li>
                      <Link href="contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div class="col-lg-3 col-md-4 pt-40">
                <div class="footer-widget-item">
                  <h3 class="footer-widget-title">UK Address</h3>
                  <ul class="footer-widget-list-item">
                    <li>
                      <a href="mailto:info@raspackaging.uk"> info@raspackaging.uk</a>
                    </li>
                    <li>
                      Ras Packaging UK Limited 71-75, Shelton Street Convent
                      Garden London, WC2H9JQ United Kingdom
                    </li>
                  </ul>
                </div>
              </div> */}
              <div class="col-lg-4 pt-40">
                <div class="footer-contact-info">
                  <h3 class="footer-widget-title">INDIA ADDRESS</h3>
                  <div class="address">
                    <ul>
                      <li className="mb-0">
                        <a href="#">Email:- sales@raspoly.com</a>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          src="/assets/images/pin.png"
                          alt=""
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "block",
                          }}
                        />{" "}
                        <p className="m-0">
                          B-Block, 8th Floor, Vinayak Plaza Maldahiya Crossing,
                          Varanasi - 221002 UP, INDIA
                        </p>
                      </li>
                      <li>
                        <i class="fa fa-phone fs-3 mx-2"></i> +91 92369 92823
                      </li>
                      <li>
                        <i class="fa fa-whatsapp fs-3 mx-2"></i> +91 92369 92823
                      </li>
                      <li>
                        <i class="fa fa-tty fs-3 mx-2"></i> +91 542 - 2205200
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="cpl-lg-12 d-flex justify-content-center">
              <Link href="/" className="header-logo justify-content-center">
                <img
                  src="assets/images/logo/logo.png"
                  className="logoImage"
                  alt="Header Logo"
                />
              </Link>
            </div>
            <div className="col-lg-12 py-4 d-flex justify-content-center">
              <div class="social-link with-border">
                <ul>
                  <li>
                    <a
                      href="https://wa.me/+919236992823?text="
                      data-tippy="Whatsapp"
                      data-tippy-inertia="true"
                      data-tippy-animation="shift-away"
                      data-tippy-delay="50"
                      data-tippy-arrow="true"
                      data-tippy-theme="sharpborder"
                    >
                      <i class="fa fa-whatsapp"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="#"
                      data-tippy="Twitter"
                      data-tippy-inertia="true"
                      data-tippy-animation="shift-away"
                      data-tippy-delay="50"
                      data-tippy-arrow="true"
                      data-tippy-theme="sharpborder"
                    >
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="https://www.linkedin.com/company/ras-polytex-private-limited/posts/?feedView=all"
                      data-tippy="Linkedin"
                      data-tippy-inertia="true"
                      data-tippy-animation="shift-away"
                      data-tippy-delay="50"
                      data-tippy-arrow="true"
                      data-tippy-theme="sharpborder"
                    >
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCsupekTL8hixCx72qs2Ay7g"
                      data-tippy="Youtube"
                      data-tippy-inertia="true"
                      data-tippy-animation="shift-away"
                      data-tippy-delay="50"
                      data-tippy-arrow="true"
                      data-tippy-theme="sharpborder"
                    >
                      <i class="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="copyright">
                  <span class="copyright-text">
                    © 2024 RAS Polytex PVT LTD Made with &nbsp;
                    <i class="fa fa-heart text-danger"></i> &nbsp; by  &nbsp;
                    <a
                      href=" https://www.wizards.co.in"
                      rel="noopener"
                      target="_blank"
                    >
                       Wizards Next
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
