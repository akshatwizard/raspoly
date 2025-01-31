import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Providers from "@/components/Nprogress";
import { ReactLenis } from "lenis/react";

export const metadata = {
  title: "RAS Polytex PVT LTD",
  description: "RAS Polytex PVT LTD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/assets/images/logo/logo.png"
          type="image/x-icon"
        />
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
        <link rel="stylesheet" href="assets/css/Pe-icon-7-stroke.css" />
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        <link rel="stylesheet" href="assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="assets/css/nice-select.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="assets/css/ion.rangeSlider.min.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/bs-brain@2.0.4/tutorials/timelines/timeline-3/assets/css/timeline-3.css"
        ></link>
      </head>
      <body>
        <ReactLenis root>
          <div className="main-wrapper">
            <Providers>
              <Header />
              {children}
              <Footer />
            </Providers>
          </div>
        </ReactLenis>
        <GoogleAnalytics gaId="G-064ZQKMCLZ" />
        <script src="assets/js/vendor/bootstrap.bundle.min.js"></script>
        <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
        <script src="assets/js/vendor/jquery-migrate-3.3.2.min.js"></script>
        <script src="assets/js/vendor/jquery.waypoints.js"></script>
        <script src="assets/js/vendor/modernizr-3.11.2.min.js"></script>
        <script src="assets/js/plugins/wow.min.js"></script>
        <script src="assets/js/plugins/swiper-bundle.min.js"></script>
        <script src="assets/js/plugins/jquery.nice-select.js"></script>
        <script src="assets/js/plugins/parallax.min.js"></script>
        <script src="assets/js/plugins/jquery.magnific-popup.min.js"></script>
        <script src="assets/js/plugins/tippy.min.js"></script>
        <script src="assets/js/plugins/ion.rangeSlider.min.js"></script>
        <script src="assets/js/plugins/mailchimp-ajax.js"></script>
        <script src="assets/js/plugins/jquery.counterup.js"></script>
        <script src="assets/js/main.js"></script>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </body>
    </html>
  );
}
