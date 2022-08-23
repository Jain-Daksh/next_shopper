import React from 'react'
import Image from 'next/image'
import Image1 from '../Images/features/feature1.svg'
import Image2 from '../Images/features/feature2.svg'
import Image3 from '../Images/features/feature3.svg'
import Image4 from '../Images/features/feature4.svg'
import Image5 from '../Images/features/feature5.svg'
import Image6 from '../Images/features/feature6.svg'

function Features() {
  return (
    <div>
      <section class="features">
        <div class="container">
          <div class="row">
            <div class="col-12 features-text-1">
              <h2>Key Features</h2>
              <p>Something that makes Shopper stand out against competitors.</p>
            </div>
          </div>
          <div class="row features-text-2">
            <div class="col-12 col-md-6 col-lg-4">


              <div class="card card-sm mb-7 border">
                <div class="card-body d-flex align-items-center">
                  <Image className='image-features ' src={Image1}></Image>
                  <strong class="font-size-lg featuretext">
                    Built with Bootstrap
                  </strong>

                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">


              <div class="card card-sm mb-7 border">
                <div class="card-body d-flex align-items-center">


                  <Image className='image-features  ' src={Image2}></Image>



                  <strong class="font-size-lg featuretext">
                    Figma design files included
                  </strong>

                </div>
              </div>

            </div>
            <div class="col-12 col-md-6 col-lg-4">


              <div class="card card-sm mb-7 mb-lg-0 border">
                <div class="card-body d-flex align-items-center">


                  <Image className='image-features  ' src={Image3}></Image>



                  <strong class="font-size-lg featuretext">
                    Easy customization with SASS variables
                  </strong>

                </div>
              </div>

            </div>
            <div class="col-12 col-md-6 col-lg-4">


              <div class="card card-sm mb-7 mb-lg-0 border">
                <div class="card-body d-flex align-items-center">

                  <Image className='image-features  ' src={Image4}></Image>



                  <strong class="font-size-lg featuretext">
                    Gulp tooling to automate the workflow
                  </strong>

                </div>
              </div>

            </div>
            <div class="col-12 col-md-6 col-lg-4">


              <div class="card card-sm mb-7 mb-md-0 border">
                <div class="card-body d-flex align-items-center">


                  <Image className='image-features  ' src={Image5}></Image>



                  <strong class="font-size-lg featuretext">
                    W3C valid HTML
                  </strong>

                </div>
              </div>

            </div>
            <div class="col-12 col-md-6 col-lg-4">


              <div class="card card-sm border">
                <div class="card-body d-flex align-items-center">

                  <Image className='image-features  ' src={Image6}></Image>



                  <strong class="font-size-lg featuretext">
                    Detailed documentation
                  </strong>

                </div>
              </div>

            </div>
          </div>
          <div class="row ">
            <div class="col-12 col-md-4">

              <ul class="list-unstyled">
                <li class="d-flex">
                  <i class="fas fa-star mr-3 text-warning"></i> 8 homepage variations
                </li>
                <li class="d-flex mt-5">
                  <i class="fas fa-star mr-3 text-warning"></i> 30+ support pages including complete shop, account and blog sections
                </li>
                <li class="d-flex mt-5">
                  <i class="fas fa-star mr-3 text-warning"></i> 10+ navigation and 4 footer variations
                </li>
                <li class="d-flex mt-5">
                  <i class="fas fa-star mr-3 text-warning"></i> 4 mega menu dropdown variations
                </li>
                <li class="d-flex mt-5">
                  <i class="fas fa-star mr-3 text-warning"></i> 10 modal windows for the most common use-cases
                </li>
              </ul>

            </div>
            <div class="col-12 col-md-4">

              <ul class="list-unstyled">
                <li class="d-flex">
                  <i class="fas fa-star mr-3 text-warning"></i> Browsersync live reload for easier prototyping
                </li>
                <li class="d-flex mt-5">
                  <i class="fas fa-star mr-3 text-warning"></i> HTML partials for rapid development
                </li>
                <li class="d-flex mt-5">
                  <i class="fas fa-star mr-3 text-warning"></i> Precompiled files for those who like to keep things simple
                </li>
                <li class="d-flex mt-5">
                  <i class="fas fa-star mr-3 text-warning"></i> Clean code that stays true to Bootstrap
                </li>
                <li class="d-flex mt-5">
                  <i class="fas fa-star mr-3 text-warning"></i> Premium plugins included
                </li>

              </ul>

            </div>
            <div class="col-12 col-md-4">

              <ul class="list-unstyled">
                <li class="d-flex">
                  <i class="fas fa-star mr-3 text-warning"></i> Fully responsive on modern browsers
                </li>
                <li class="d-flex mt-5">
                  <i class="fas fa-star mr-3 text-warning"></i> Modern and user-friendly design
                </li>
                <li class="d-flex mt-5">
                  <i class="fas fa-star mr-3 text-warning"></i> Built by professionals with more than 5 years of experience
                </li>
                <li class="d-flex mt-5">
                  <i class="fas fa-star mr-3 text-warning"></i> Free updates for lifetime
                </li>
                <li class="d-flex mt-5">
                  <i class="fas fa-star mr-3 text-warning"></i> Free support by e-mail
                </li>
              </ul>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features