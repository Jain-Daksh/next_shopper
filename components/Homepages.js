import React from 'react'
import Image from 'next/image'
import Image1 from '../Images/homepages/index-default.png'
import Image2 from '../Images/homepages/index-classic.png'
import Image3 from '../Images/homepages/index-fashion.png'
import Image4 from '../Images/homepages/index-boxed.png'
import Image5 from '../Images/homepages/index-simple.png'
import Image6 from '../Images/homepages/index-asymmetric.png'
import Image7 from '../Images/homepages/index-sidenav.png'
import Image8 from '../Images/homepages/index-landing.png'
function Homepages() {
  return (
    <div>
      <section class="homepages">
        <div class="container">
          <div class="row mx-auto">
            <div class="col homepages-text mx-auto">
              <h2>Homepages</h2>
              <p>8 homepage variations including a sample landing page with anchor navigation.</p>
            </div>
          </div>
          <div class="row ">
            <div class="col-12 col-md-4">
                <Image
                  src={Image1}
                  alt="Abc logo"
                  className="image-homepage"
                />
                <div class="image-homepage-text">
                  <strong>Default</strong>
                </div>
            </div>
            <div class="col-12 col-md-4">
              <Image
                  src={Image2}
                  alt="Abc logo"
                  className="image-homepage"
                />
                <div class="image-homepage-text">
                  <strong>Classic</strong>
                </div>
            </div>
            <div class="col-12 col-md-4">
              <Image
                  src={Image3}
                  alt="Abc logo"
                  className="image-homepage"
                />
                <div class="image-homepage-text">
                  <strong>Fashion</strong>
                </div>
            </div>
            <div class="col-12 col-md-4">
              <Image
                  src={Image4}
                  alt="Abc logo"
                  className="image-homepage"
                />
                <div class="image-homepage-text">
                  <strong>Boxes</strong>
                </div>
            </div>
            <div class="col-12 col-md-4">
              <Image
                  src={Image5}
                  alt="Abc logo"
                  className="image-homepage"
                />
                <div class="image-homepage-text">
                  <strong>Simple</strong>
                </div>
            </div>
            <div class="col-12 col-md-4">
              <Image
                  src={Image6}
                  alt="Abc logo"
                  className="image-homepage"
                />
                <div class="image-homepage-text">
                  <strong>Asymmetric</strong>
                </div>
            </div>
            <div class="col-12 col-md-4">
              <Image
                  src={Image7}
                  alt="Abc logo"
                  className="image-homepage"
                />
                <div class="image-homepage-text">
                  <strong>Sidenav</strong>
                </div>
            </div>
            <div class="col-12 col-md-4">
              <Image
                  src={Image8}
                  alt="Abc logo"
                  className="image-homepage"
                />
                <div class="image-homepage-text">
                  <strong>Landing</strong>
                </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="card" style={{width: '22rem' , height: '25rem'}}> 
                <div class="card-body  justify-content-center cover">
                  <p class="card-text">
                    More pages coming soon! Feel free to contact us with your ideas.
                  </p>
                  <a class="btn btn-danger btn-xs card-text" href="mailto:plus.unvab@gmail.com">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepages

