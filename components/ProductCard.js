import React from 'react'
import Image from 'next/image';
import Image1 from '../Images/products/product-7.jpg'
import Image2 from '../Images/products/product-32.jpg'
import Image3 from '../Images/products/product-12.jpg'
import Image4 from '../Images/products/product-6.jpg'
import Image6 from '../Images/products/product-122.jpg'
import Image7 from '../Images/products/product-8.jpg'
import Image8 from '../Images/products/product-11.jpg'

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

function ProductCard() {
  return (
    <div>
      <section class="product-cards">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center product-cards-text">
              <h2>Product Cards</h2>
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
              <Image src={Image6} alt="logo" className='imagegallerys'></Image>
            </div>
            <div className="item">
              <Image src={Image7} alt="logo" className='imagegallerys'></Image>
            </div>
            <div className="item">
              <Image src={Image8} alt="logo" className='imagegallerys'></Image>
            </div>
          </OwlCarousel>
        </div>

      </section>
    </div>
  )
}

export default ProductCard