import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Image1 from '../Images/Shop & Account Pages/shop.png'
import Image2 from '../Images/Shop & Account Pages/shop-topbar.png'
import Image3 from '../Images/Shop & Account Pages/shop-collapse.png'
import Image4 from '../Images/Shop & Account Pages/shop-simple.png'
import Image5 from '../Images/Shop & Account Pages/shop-masonry.png'
import Image6 from '../Images/Shop & Account Pages/product-images-stacked.png'
import Image7 from '../Images/Shop & Account Pages/product.png'
import Image8 from '../Images/Shop & Account Pages/product-images-left.png'
import Image9 from '../Images/Shop & Account Pages/product-image-grid.png'

var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

function Blog() {
  return (
    <div>
      <section class="blog">
        <div class="container">
          <div class="row">
            <div class="col blog-text">
              <h2>Support & Blog Pages </h2>
            </div>
          </div>
          <OwlCarousel>
            <div className="item ">
              <Image src={Image1} alt="logo" className='imagegallerys'></Image>
            </div>
            <div className="item">
              <Image src={Image2} alt="logo" className='imagegallerys'></Image>
            </div>
            <div className="item">
              <Image src={Image3} alt="logo" className='imagegallerys'></Image>
            </div>
            <div className="item">
              <Image src={Image4} alt="logo" className='imagegallerys'></Image>
            </div>
            <div className="item">
              <Image src={Image5} alt="logo" className='imagegallerys'></Image>
            </div>
            <div className="item">
              <Image src={Image6} alt="logo" className='imagegallerys'></Image>
            </div>
            <div className="item">
              <Image src={Image7} alt="logo" className='imagegallerys'></Image>
            </div>
            <div className="item">
              <Image src={Image8} alt="logo" className='imagegallerys'></Image>
            </div>
            <div className="item">
              <Image src={Image9} alt="logo" className='imagegallerys'></Image>
            </div>
          </OwlCarousel>
        </div>

      </section>

    </div>
  )
}

export default Blog