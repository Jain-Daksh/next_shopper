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
import Image10 from '../Images/Shop & Account Pages/product-image-slider.png'
import Image11 from '../Images/Shop & Account Pages/product-images-left.png'
import Image12 from '../Images/Shop & Account Pages/shopping-cart.png'
import Image13 from '../Images/Shop & Account Pages/checkout.png'
import Image14 from '../Images/Shop & Account Pages/order-completed.png'
import Image15 from '../Images/Shop & Account Pages/shipping-and-returns.png'
import Image16 from '../Images/Shop & Account Pages/shop (1).png'
//import Image17 from '../Images/Shop & Account Pages/shop-topbar (1)'
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

function ShopAndAccount() {
  return (
    <div className="shop">
    <section className="slidername">
      <div className="container mx-auto" >
          <div className="row mx-auto">
            <div className="col shop-text">
              <h2>Shop & Account Pages</h2>
            </div>
          </div>

                
                </div>
        <OwlCarousel>
        <div className="item ">
          <Image src={Image1} alt="logo"  className='imagegallerys'></Image>
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
        <div className="item">
        <Image src={Image10} alt="logo" className='imagegallerys'></Image>
        </div>
        <div className="item">
        <Image src={Image11} alt="logo" className='imagegallerys'></Image>
        </div>
        <div className="item">
        <Image src={Image12} alt="logo" className='imagegallerys'></Image>
        </div>
        <div className="item">
        <Image src={Image13} alt="logo" className='imagegallerys'></Image>
        </div>
        <div className="item">
        <Image src={Image14} alt="logo" className='imagegallerys'></Image>
        </div>
        <div className="item">
        <Image src={Image15} alt="logo" className='imagegallerys'></Image>
        </div>
        <div className="item">
        <Image src={Image16} alt="logo" className='imagegallerys'></Image>
        </div>
        <div className="item">
        <Image src={Image2} alt="logo" className='imagegallerys'></Image>
        </div>
        </OwlCarousel>
      </section>

    </div>
  )
}

export default ShopAndAccount



/*

<section className="slidername">
        <OwlCarousel>
        <div className="item">
          <Image src={Image1} alt="logo"  className='imagegallerys'></Image>
        </div>
          <div className="item">
        <Image src={Image2} alt="logo" className='imagegallerys'></Image>
        </div>
        <div className="item">
          <Image src={Image3} alt="logo" className='imagegallerys'></Image>
        </div>
        <div className="item">
        <Image src={Image5} alt="logo" className='imagegallerys'></Image>
        </div>
        <div className="item">
        <Image src={Image6} alt="logo" className='imagegallerys'></Image>
        </div>
        </OwlCarousel>
      </section>

*/

/*


  <section className="shop">
        <div className="container mx-auto" >
          <div className="row mx-auto">
            <div className="col shop-text">
              <h2>Shop & Account Pages</h2>
            </div>
          </div>
          <div className="row mx-auto">
            <div className="col mx-auto">
              <div className="main-gallery js-flickity mx-auto" data-flickity-options='{ "cellAlign": "left", "contain": true }'>
                <div className="col-12 col-md-4 image-shops">
                  <Image
                    src={Image1}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
                <div className="col-12 col-md-4 image-shops">
                  <Image
                    src={Image2}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
                <div className="col-12 col-md-4 image-shops">
                  <Image
                    src={Image3}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
                <div className="col-12 col-md-4 image-shops">
                  <Image
                    src={Image4}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
                <div className="col-12 col-md-4 image-shops">
                  <Image
                    src={Image5}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
                <div className="col-12 col-md-4 image-shops">
                  <Image
                    src={Image6}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
                <div className="col-12 col-md-4 image-shops">
                  <Image
                    src={Image7}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
                <div className="col-12 col-md-4 image-shops">
                  <Image
                    src={Image8}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
                <div className="col-12 col-md-4 image-shops">
                  <Image
                    src={Image9}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
                <div className="col-12 col-md-4 image-shops">
                  <Image
                    src={Image10}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
                <div className="col-12 col-md-4 image-shops">
                  <Image
                    src={Image11}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
                <div className="col-12 col-md-4 image-shops">
                  <Image
                    src={Image12}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
                <div className="col-12 col-md-4 image-shops">
                  <Image
                    src={Image13}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
                <div className="col-12 col-md-4 image-shops">
                  <Image
                    src={Image14}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
                <div className="col-12 col-md-4 image-shops">
                  <Image
                    src={Image15}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
                <div className="col-12 col-md-4 image-shops">
                  <Image
                    src={Image16}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
                <div className="col-12 col-md-4 image-shops">
                  <Image
                    src={Image2}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
*/

/*
          <div className="row mx-auto">
            <div className="col mx-auto">
            <OwlCarousel>
            <div className="col-12 col-md-4 image-shops">
                  <Image
                    src={Image1}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
                <div className="col-12 col-md-4 image-shops">
                  <Image
                    src={Image1}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
                </OwlCarousel>

                </div>
                </div>

*/