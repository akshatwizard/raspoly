import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="main-header-area">
      <div className="header-middle py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="header-middle-wrap position-relative">
                <div className="header-contact d-none d-lg-flex">
                  <i className="pe-7s-call"></i>
                  <Link href="tel://+91 542 - 2205300">+91 542 - 2205300</Link>
                </div>

                <Link href="/" className="header-logo">
                  <img
                    src="assets/images/logo/logo.png"
                    className="logoImage"
                    alt="Header Logo"
                  />
                </Link>

                <div className="header-right">
                  <ul>
                    <li></li>
                    <li className="d-none d-lg-block">
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
                    </li>
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
      <div className="header-bottom d-none d-lg-block mb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-menu position-relative">
                <nav className="main-nav">
                  <ul>
                    <li className="drop-holder">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="megamenu-holder">
                      <Link href="/">Woven Products</Link>
                      <ul className="drop-menu megamenu">
                        <li>
                          <ul>
                            <li>
                              <Link href="#">FIBC</Link>
                            </li>
                            <li>
                              <Link href="#">PPWS & Dunnage Bags</Link>
                            </li>
                            <li>
                              <Link href="#">AD Star Block Bottom bags</Link>
                            </li>
                            <li>
                              <Link href="#">Leno bags</Link>
                            </li>
                            <li>
                              <Link href="#">
                                Laminated and Unlaminated Fabric
                              </Link>
                            </li>
                            <li>
                              <Link href="#">Geotextiles</Link>
                            </li>
                            <li>
                              <Link href="#">
                                BOPP , Shopping bags and PET Food
                              </Link>
                            </li>
                            <li>
                              <Link href="#">Pinch Bottom Bags</Link>
                            </li>
                            <li>
                              <Link href="#">Tarpaulins</Link>
                            </li>
                            <li>
                              <Link href="#">Roof Underlayment</Link>
                            </li>
                            <li>
                              <Link href="#">Pond Liners</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="drop-holder">
                      <Link href="#">Webbing & Yarns</Link>
                      <ul className="drop-menu">
                        <li>
                          <Link href="#">Multifilament Yarn</Link>
                        </li>
                        <li>
                          <Link href="#">Webbings &amp; Handles</Link>
                        </li>
                      </ul>
                    </li>

                    <li className="drop-holder">
                      <Link href="#">Colour and Pigments</Link>
                      <ul className="drop-menu">
                        <li>
                          <Link href="#">Ink and reducers</Link>
                        </li>
                      </ul>
                    </li>

                    <li className="drop-holder">
                      <Link href="#">Additives</Link>
                      <ul className="drop-menu">
                        <li>
                          <Link href="#">Colour Masterbatches</Link>
                        </li>
                        <li>
                          <Link href="#">UV Masterbatch</Link>
                        </li>
                        <li>
                          <Link href="#">Calcium Masterbatch</Link>
                        </li>
                      </ul>
                    </li>

                    <li className="drop-holder">
                      <Link href="#">CSR & Awards</Link>
                      <ul className="drop-menu">
                        <li>
                          <Link href="#">CSR</Link>
                        </li>
                        <li>
                          <Link href="#">Awards &amp; Recognitions</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link href="#">About Us</Link>
                    </li>
                    <li>
                      <Link href="#">Contact Us</Link>
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
                </Link>
              </div>
              <div className="col-lg-11 d-none d-lg-block">
                <div className="main-menu">
                  <nav className="main-nav">
                    <ul className="stick stickyUL" style={{gap:"30px"}}>
                      <li className="drop-holder">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="megamenu-holder">
                        <Link href="/">Woven Products</Link>
                        <ul className="drop-menu megamenu">
                          <li>
                            <ul>
                              <li>
                                <Link href="#">FIBC</Link>
                              </li>
                              <li>
                                <Link href="#">PPWS & Dunnage Bags</Link>
                              </li>
                              <li>
                                <Link href="#">AD Star Block Bottom bags</Link>
                              </li>
                              <li>
                                <Link href="#">Leno bags</Link>
                              </li>
                              <li>
                                <Link href="#">
                                  Laminated and Unlaminated Fabric
                                </Link>
                              </li>
                              <li>
                                <Link href="#">Geotextiles</Link>
                              </li>
                              <li>
                                <Link href="#">
                                  BOPP , Shopping bags and PET Food
                                </Link>
                              </li>
                              <li>
                                <Link href="#">Pinch Bottom Bags</Link>
                              </li>
                              <li>
                                <Link href="#">Tarpaulins</Link>
                              </li>
                              <li>
                                <Link href="#">Roof Underlayment</Link>
                              </li>
                              <li>
                                <Link href="#">Pond Liners</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="drop-holder">
                        <Link href="#">Webbing & Yarns</Link>
                        <ul className="drop-menu">
                          <li>
                            <Link href="#">Multifilament Yarn</Link>
                          </li>
                          <li>
                            <Link href="#">Webbings &amp; Handles</Link>
                          </li>
                        </ul>
                      </li>

                      <li className="drop-holder">
                        <Link href="#">Colour and Pigments</Link>
                        <ul className="drop-menu">
                          <li>
                            <Link href="#">Ink and reducers</Link>
                          </li>
                        </ul>
                      </li>

                      <li className="drop-holder">
                        <Link href="#">Additives</Link>
                        <ul className="drop-menu">
                          <li>
                            <Link href="#">Colour Masterbatches</Link>
                          </li>
                          <li>
                            <Link href="#">UV Masterbatch</Link>
                          </li>
                          <li>
                            <Link href="#">Calcium Masterbatch</Link>
                          </li>
                        </ul>
                      </li>

                      <li className="drop-holder">
                        <Link href="#">CSR & Awards</Link>
                        <ul className="drop-menu">
                          <li>
                            <Link href="#">CSR</Link>
                          </li>
                          <li>
                            <Link href="#">Awards &amp; Recognitions</Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link href="#">About Us</Link>
                      </li>
                      <li>
                        <Link href="#">Contact Us</Link>
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
              <i className="pe-7s-call"></i>
              <Link href="tel://+91 542 - 2205300">+91 542 - 2205300</Link>
            </div>
            <div className="offcanvas-menu_area">
              <nav className="offcanvas-navigation">
                <ul className="mobile-menu">
                  <li>
                    <Link href="#">
                      <span className="mm-text">Home</span>
                    </Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="#">
                      <span className="mm-text">
                        Woven Products
                        <i className="pe-7s-angle-down"></i>
                      </span>
                    </Link>
                    <ul className="sub-menu">
                      <li className="menu-item-has-children">
                        <Link href="#">
                          <span className="mm-text">FIBC</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">
                          <span className="mm-text">PPWS & Dunnage Bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">
                          <span className="mm-text">
                            AD Star Block Bottom bags
                          </span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">
                          <span className="mm-text">Leno bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">
                          <span className="mm-text">
                            Laminated and Unlaminated Fabric
                          </span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">
                          <span className="mm-text">Geotextiles</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">
                          <span className="mm-text">
                            BOPP , Shopping bags and PET Food
                          </span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">
                          <span className="mm-text">Pinch Bottom Bags</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">
                          <span className="mm-text">Tarpaulins</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">
                          <span className="mm-text">Roof Underlayment</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">
                          <span className="mm-text">Pond Liners</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="#">
                      <span className="mm-text">
                        Webbing & Yarns
                        <i className="pe-7s-angle-down"></i>
                      </span>
                    </Link>
                    <ul className="sub-menu">
                      <li className="menu-item-has-children">
                        <Link href="#">
                          <span className="mm-text">Multifilament Yarn</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">
                          <span className="mm-text">
                            Webbings &amp; Handles
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item-has-children">
                    <Link href="#">
                      <span className="mm-text">
                        Colour and Pigments
                        <i className="pe-7s-angle-down"></i>
                      </span>
                    </Link>
                    <ul className="sub-menu">
                      <li className="menu-item-has-children">
                        <Link href="#">
                          <span className="mm-text">Ink and reducers</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item-has-children">
                    <Link href="#">
                      <span className="mm-text">
                        Additives
                        <i className="pe-7s-angle-down"></i>
                      </span>
                    </Link>
                    <ul className="sub-menu">
                      <li className="menu-item-has-children">
                        <Link href="#">
                          <span className="mm-text">Colour Masterbatches</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">
                          <span className="mm-text">UV Masterbatch</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">
                          <span className="mm-text">Calcium Masterbatch</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item-has-children">
                    <Link href="#">
                      <span className="mm-text">
                        CSR & Awards
                        <i className="pe-7s-angle-down"></i>
                      </span>
                    </Link>
                    <ul className="sub-menu">
                      <li className="menu-item-has-children">
                        <Link href="#">
                          <span className="mm-text">CSR</span>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">
                          <span className="mm-text">
                            Awards &amp; Recognitions
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link href="#">
                      <span className="mm-text">About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="mm-text">Contact</span>
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
      <div className="offcanvas-minicart_wrapper" id="miniCart">
        <div className="offcanvas-body">
          <div className="minicart-content">
            <div className="minicart-heading">
              <h4 className="mb-0">Shopping Cart</h4>
              <a href="#" className="button-close">
                <i
                  className="pe-7s-close"
                  data-tippy="Close"
                  data-tippy-inertia="true"
                  data-tippy-animation="shift-away"
                  data-tippy-delay="50"
                  data-tippy-arrow="true"
                  data-tippy-theme="sharpborder"
                ></i>
              </a>
            </div>
            <ul className="minicart-list">
              <li className="minicart-product">
                <a className="product-item_remove" href="#">
                  <i
                    className="pe-7s-close"
                    data-tippy="Remove"
                    data-tippy-inertia="true"
                    data-tippy-animation="shift-away"
                    data-tippy-delay="50"
                    data-tippy-arrow="true"
                    data-tippy-theme="sharpborder"
                  ></i>
                </a>
                <a
                  href="single-product-variable.html"
                  className="product-item_img"
                >
                  <img
                    className="img-full"
                    src="assets/images/product/small-size/2-1-70x78.png"
                    alt="Product Image"
                  />
                </a>
                <div className="product-item_content">
                  <a
                    className="product-item_title"
                    href="single-product-variable.html"
                  >
                    American Marigold
                  </a>
                  <span className="product-item_quantity">1 x $23.45</span>
                </div>
              </li>
              <li className="minicart-product">
                <a className="product-item_remove" href="#">
                  <i
                    className="pe-7s-close"
                    data-tippy="Remove"
                    data-tippy-inertia="true"
                    data-tippy-animation="shift-away"
                    data-tippy-delay="50"
                    data-tippy-arrow="true"
                    data-tippy-theme="sharpborder"
                  ></i>
                </a>
                <a
                  href="single-product-variable.html"
                  className="product-item_img"
                >
                  <img
                    className="img-full"
                    src="assets/images/product/small-size/2-2-70x78.png"
                    alt="Product Image"
                  />
                </a>
                <div className="product-item_content">
                  <a
                    className="product-item_title"
                    href="single-product-variable.html"
                  >
                    Black Eyed Susan
                  </a>
                  <span className="product-item_quantity">1 x $25.45</span>
                </div>
              </li>
              <li className="minicart-product">
                <a className="product-item_remove" href="#">
                  <i
                    className="pe-7s-close"
                    data-tippy="Remove"
                    data-tippy-inertia="true"
                    data-tippy-animation="shift-away"
                    data-tippy-delay="50"
                    data-tippy-arrow="true"
                    data-tippy-theme="sharpborder"
                  ></i>
                </a>
                <a
                  href="single-product-variable.html"
                  className="product-item_img"
                >
                  <img
                    className="img-full"
                    src="assets/images/product/small-size/2-3-70x78.png"
                    alt="Product Image"
                  />
                </a>
                <div className="product-item_content">
                  <a
                    className="product-item_title"
                    href="single-product-variable.html"
                  >
                    Bleeding Heart
                  </a>
                  <span className="product-item_quantity">1 x $30.45</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="minicart-item_total">
            <span>Subtotal</span>
            <span className="ammount">$79.35</span>
          </div>
          <div className="group-btn_wrap d-grid gap-2">
            <a href="cart.html" className="btn btn-dark">
              View Cart
            </a>
            <a href="checkout.html" className="btn btn-dark">
              Checkout
            </a>
          </div>
        </div>
      </div>
      {/* <div className="global-overlay"></div> */}
    </header>
  );
}
