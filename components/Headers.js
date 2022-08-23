import React from 'react'
import Image from 'next/image'
import Image1 from '../Images/Headers/nav-1.png'
import Image2 from '../Images/Headers/nav-2.png'
import Image3 from '../Images/Headers/nav-3.png'
import Image4 from '../Images/Headers/nav-4.png'
import Image5 from '../Images/Headers/nav-5.png'
import Image6 from '../Images/Headers/nav-6.png'

const imagess = [Image1, Image2, Image3, Image4, Image5];

function Headers() {
  return (
    <div>
      <section class="headers">
        <div class="container">
          <div class="row">
            <div class="col">
              <h2 class="headers-text">Headers</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              < Image
                src={Image1}
                alt="Abc logo"
                className="image-shop"
              />
            </div>
            <div class="col-12">
              < Image
                src={Image2}
                alt="Abc logo"
                className="image-shop"
              />
            </div>
            <div class="col-12">
              < Image
                src={Image3}
                alt="Abc logo"
                className="image-shop"
              />            
            </div>
            <div class="col-12">
              < Image
                src={Image4}
                alt="Abc logo"
                className="image-shop"
              />            
            </div>
            <div class="col-12">
              < Image
                src={Image5}
                alt="Abc logo"
                className="image-shop"
              />            
            </div>
            <div class="col-12">
              < Image
                src={Image6}
                alt="Abc logo"
                className="image-shop"
              />            
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Headers

