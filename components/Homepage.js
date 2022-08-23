import React from 'react'
import Image from 'next/image'
import Image1 from '../Images/cover/devices-1.png'
function Homepage() {
  return (
    <div>
       <section class="home">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md-7 col-lg-6 col-xl-5 text-home">
              <h1>
               Flexible E-Commerce Bootstrap Template
             </h1>
             <p>
 
               Shopper is a beautiful, simple and flexible e-commerce template built on top of Bootstrap. It includes dozens of components and pages you can use “as is” or customize to build exactly what you need.
             
             </p>
             <a class="btn btn-danger button-home" href="#pages" data-toggle="smooth-scroll">
               Find Out More
             </a>
            </div>
            <div class="col-12 col-md-5 col-lg-6 col-xl-7 ">
            <Image
                src={Image1}
                alt="Abc logo"
                className="move-image imagess" 
              />  
           </div>
 
 
          </div>
        </div>

        
   
    </section>
    </div>
  )
}

export default Homepage