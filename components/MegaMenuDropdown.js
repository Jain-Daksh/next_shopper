import React from 'react'
import Image from 'next/image'
import Image1 from '../Images/Mega Menu Dropdowns/menu-1.jpg'
import Image2 from '../Images/Mega Menu Dropdowns/menu-2.jpg'
import Image3 from '../Images/Mega Menu Dropdowns/menu-3.jpg'
import Image4 from '../Images/Mega Menu Dropdowns/menu-4.jpg'

function MegaMenuDropdown() {
  return (
    <div>
       <section class="mega-menu-dropdown">
      <div class="container">
        <div class="row">
          <div class="col mega-menu-dropdown-text">
            <h2>Mega Menu Dropdowns</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 mega-menu-dropdown-image">
            <Image className='mega-menu-dropdown-images' src={Image1} >
            </Image>
            </div>
          <div class="col-12 col-md-6 mega-menu-dropdown-image">
          <Image className='mega-menu-dropdown-images' src={Image2} >
            </Image>
          </div>
          <div class="col-12 col-md-6 mega-menu-dropdown-image">
          <Image className='mega-menu-dropdown-images' src={Image3} >
            </Image>
          </div>
          <div class="col-12 col-md-6 mega-menu-dropdown-image">
          <Image className='mega-menu-dropdown-images' src={Image4} >
            </Image>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default MegaMenuDropdown