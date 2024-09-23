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
                      <Link href="#">FIBC</Link>
                    </li>
                    <li>
                      <Link href="#">PP Woven Bags</Link>
                    </li>
                    <li>
                      <Link href="#">BOPP Bagss</Link>
                    </li>
                    <li>
                      <Link href="#">AD Star Block Bottoms</Link>
                    </li>
                    <li>
                      <Link href="#">Fabric (Laminated/Unlaminated)</Link>
                    </li>
                    <li>
                      <Link href="#">Multi Filament Yarn</Link>
                    </li>
                    <li>
                      <Link href="#">Masterbatches</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 pt-40">
                <div class="footer-widget-item">
                  <h3 class="footer-widget-title">Useful Links</h3>
                  <ul class="footer-widget-list-item">
                    <li>
                      <Link href="#">Certificate and Achivements</Link>
                    </li>
                    <li>
                      <Link href="#">Team</Link>
                    </li>
                    <li>
                      <Link href="#">CSR</Link>
                    </li>
                    <li>
                      <Link href="#">Contact</Link>
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
                      <li className="mb-0"><a href="#"><i class="fa fa-at"></i> sales@raspoly.com</a></li>
                      <li>
                        B-Block, 8th Floor, Vinayak Plaza Maldahiya Crossing,
                        Varanasi - 221002 UP, INDIA
                      </li>
                      <li><i class="fa fa-phone"></i>+91 92369 92823</li>
                      <li><i class="fa fa-whatsapp"></i> +91 92369 92823</li>
                      <li><i class="fa fa-tty"></i> +91 542 - 2205200</li>
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
                      href="#"
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
                      href="#"
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
                      href="#"
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
                    © 2024 RAS Polytex PVT LTD Made with{" "}
                    <i class="fa fa-heart text-danger"></i> by
                    <a href="#" rel="noopener" target="_blank">
                      {" "}
                      Wizards{" "}
                    </a>{" "}
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
