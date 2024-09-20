import Link from 'next/link'
import React from 'react'

export default function Products() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="row row-gap-4">
        <div className="section-title-wrap without-tab">
            <h2 className="section-title mb-3">Some Of Our Products Are</h2>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="indImg text-center">
              <img
                src="https://www.raspoly.com/wp-content/uploads/2018/11/1-1024x635.jpg"
                alt=""
              />
              <Link href='fibc'><h4>FIBC Bags</h4></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="indImg">
              <img
                src="https://www.raspoly.com/image/PP-Woven-Bags.jpg"
                alt=""
              />
              <Link href='ppws'>
              <h4>PP Woven Bags & Dunnage</h4>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="indImg">
              <img
                src="https://www.raspoly.com/image/BOPP-Bags.jpg"
                alt=""
              />
              <Link href='bopp'>
              <h4>BOPP, PET Food and Shopping</h4>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="indImg">
              <img src="	https://www.raspoly.com/wp-content/uploads/2019/02/Block-Bottom-bags-1.jpg" alt="" />
              <Link href='adstar'><h4>AD Star Block Bottoms</h4></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="indImg">
              <img src="https://www.raspoly.com/image/Multi-Filament-Yarn.jpg" alt="" />
              <Link href='multifilament-yarn'><h4>Multifilament Yarns and threads</h4></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="indImg">
              <img src="https://www.raspoly.com/image/geo.png" alt="" />
              <Link href='geotextiles'><h4>Geotextiles</h4></Link>
            </div>
          </div>


          <div className="col-lg-4 col-md-6 col-12">
            <div className="indImg">
              <img src="https://www.raspoly.com/image/tarpaulins.png" alt="" />
              <Link href='tarpauline'><h4>Tarpaulins and Lumber wraps</h4></Link>
            </div>
          </div>


          <div className="col-lg-4 col-md-6 col-12">
            <div className="indImg">
              <img src="https://www.raspoly.com/image/leno.png" alt="" />
              <Link href='leon'><h4>Leno bags</h4></Link>
            </div>
          </div>


          <div className="col-lg-4 col-md-6 col-12">
            <div className="indImg">
              <img src="https://www.raspoly.com/image/color.png" alt="" />
              <Link href='ink-reducers'><h4>Colour and Pigments</h4></Link>
            </div>
          </div>


          <div className="col-lg-4 col-md-6 col-12">
            <div className="indImg">
              <img src="https://www.raspoly.com/image/Masterbatches.jpg" alt="" />
              <Link href='masterbatch'><h4>Masterbatches</h4></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
