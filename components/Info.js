import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFaceRelieved} from '@fortawesome/free-solid-svg-icons'
function Info() {
  return (
    <div>
      <section className="info">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex">
              <div className="logo">
                <i className="fa fa-home" aria-hidden="true"></i>
              </div>
              <div className="info-text">
                <h6>8 HOMEPAGE VARIATIONS</h6>
                <p>Including a landing page with an anchor navigation.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex">
              <div className="logo">
                <i className="fa fa-file-text " aria-hidden="true"></i>
                <FontAwesomeIcon icon={faFaceRelieved}  className= "fa fa-file-text "/>
              </div>
              <div className="info-text">
                <h6>30+ SUPPORT PAGES</h6>
                <p>Shop, account, blog and other inner pages.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex">
              <div className="logo">
                <i className="fa fa-shopping-bag " aria-hidden="true"></i>
              </div>
              <div className="info-text">
                <h6>8 PRODUCT CARD VARIATIONS</h6>
                <p>To showcase and sell anything you want.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex">
              <div className="logo">
                <i className="fa fa-menu " aria-hidden="true"></i>
              </div>
              <div className="info-text">
                <h6>10+ NAVIGATION VARIATIONS
                </h6>
                <p>Multiple horizontal and vertical navigation options.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
    </div>
  )
}

export default Info